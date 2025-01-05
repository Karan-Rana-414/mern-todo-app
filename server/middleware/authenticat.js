import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Authorization token missing' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Invalid or expired token'
        });
    }
};

export default authenticate;