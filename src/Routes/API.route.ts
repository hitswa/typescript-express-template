/**
 * @swagger
 * /api/example:
 *   get:
 *     description: Returns an example
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
// app.get('/api/example', (req, res) => {
//     res.json({ message: 'Hello, World!' });
// });