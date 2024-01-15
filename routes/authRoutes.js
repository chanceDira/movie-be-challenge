const express = require("express");
const { signup, login } = require("../controllers/authController");

const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     description: Create a new user (signup)
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: John Doe
 *             email:
 *               type: string
 *               example: john@example.com
 *             password:
 *               type: string
 *               example: password123
 *             role:
 *               type: string
 *               example: user
 *     responses:
 *       200:
 *         description: User signed up successfully
 *       400:
 *         description: Invalid input or user already exists
 */

router.post("/signup", signup);

/**
 * @swagger
 * /login:
 *   post:
 *     description: User login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               example: john@example.com
 *             password:
 *               type: string
 *               example: password123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", login);

module.exports = router;