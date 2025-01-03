import { model, models, Schema, Types } from "mongoose";

export interface IModel {}

const ModelSchema = new Schema<IModel>({}, { timestamps: true });

const Model = models?.Account || model<IModel>("Model", ModelSchema);

export default Model;
