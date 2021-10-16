/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { Stategy, VerifyCallback } from "passport-google-oauth20";
import { Injectable } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";


@Injectable()

export class GoogleStrategy extends PassportStrategy(Stategy, "google") {
    constructor() {
        super({
            clientID: process.env.CLIENT_ID, // view src/messages
            clientSecret: process.env.CLIENT_SECRET, 
            callbackURL: process.env.CALLBACK_URL, 
            scope: ["email", "profile"]
        });
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void> { // you can use <any> too
        const { name, emails, photos } = profile // redeclaring 
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        done(null, user)
    }
}