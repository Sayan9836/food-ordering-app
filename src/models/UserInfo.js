import { model, models, Schema } from "mongoose";
import mongoose from "mongoose";
const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    admin: { type: Boolean, default: false },
    cartProducts: { type: Array },
  },
  { timestamps: true },
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
