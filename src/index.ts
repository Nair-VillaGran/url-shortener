import app from './app'
import colors from 'colors'
import { startConnection } from "./config/db";

const main = async () => {
    startConnection();
    await app.listen(app.get("port"));
    console.log(colors.green(`
    🔗 Server on port: >>> ${app.get("port")} <<< 🔗`));
    };

main();