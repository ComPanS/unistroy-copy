import Post from "../models/Post.js";
import PostModel from "../models/Post.js";

export const getAddresses = async (req, res) => {
    try {
        const posts = await PostModel.find().exec();

        const addresses = posts
            .map((obj) => obj.address)
            .flat()
            .slice(0, 5);

        res.json(addresses);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить города",
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate("user").exec();
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить статьи",
        });
    }
};

export const getOne = async (req, res) => {
    const postId = req.params.id;

    PostModel.findOneAndUpdate({ _id: postId }, { returnDocument: "After" })
        .then((doc) => res.json(doc))
        .catch((err) => {
            res.status(500).json({ message: "Статья не найдена" });
        });
};

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

        PostModel.findOneAndDelete({ _id: postId })
            .then((doc) => {
                if (!doc) {
                    return res.status(404).json({
                        message: "Статья не найдена",
                    });
                }
                res.json(doc);
            })
            .catch((err) =>
                res.status(500).json({ message: "Не удалось удалить статью" })
            );
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Не удалось получить статьи",
        });
    }
};

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
            { _id: postId },
            {
                title: req.body.title,
                text: req.body.text,
                address: req.body.address,
                imageUrl: req.body.imageUrl,
                user: req.userId,
                logo: req.body.logo,
                threeQuote: req.body.threeQuote,
            }
        );

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Не удалось обновить статью",
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            address: req.body.address,
            user: req.userId,
            logo: req.body.logo,
            threeQuote: req.body.threeQuote,
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Не удалось создать статью",
        });
    }
};
