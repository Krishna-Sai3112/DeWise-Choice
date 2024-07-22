
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import mongoose from 'mongoose';
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github';
import User from '@/models/User';

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),

    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github"){
        const client = await mongoose.connect("mongodb+srv://likithkoneru:SkwW7cUlh49FkScD@cluster0.t1ozbtz.mongodb.net/Users/credentials")
        console.log("baigan1");
        console.log(user, account);
    const currentUser = User.findOne({email: email})
    if(!currentUser){
        const newUser = new User({
            email: email,
            username: email.split("@")[0]
        })
        await newUser.save()
        console.log("baigan2");
        user.name = newUser.username
    }
    else{
        user.name = currentUser.username
        console.log("baigan3");
    }
    console.log("baigan4");
    return true    
    }
  }
}

})

export { authoptions as GET, authoptions as POST}