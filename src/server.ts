import mongoose from 'mongoose';
import { app } from './app';
import config from './app/config';

async function bootstrap() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`E-commerce app listening on ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
