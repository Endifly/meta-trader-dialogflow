import { userService } from "../Services/"

function WebhookController(app) {
  app.post('/webhook', (req, res) => {
    console.log(req)
    res.status(200).send("user controller");
  });

}
export default WebhookController