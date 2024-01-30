# custom band site/ linktree/ diy show reservation system
This is a ready to deploy* free template for a custom linktree-style website that you can use to promote your band and link to all your socials and contact info in one place. Pages/features you don't need can be deleted, just remember to also remove the links to them in the menu: src/components/Header.tsx  

*\*you will need to make some free accounts with vercel, mongodb, and google cloud for some features.*

### If you are nontechnical and overwhelmed, you are welcome to message me for help.

## customizing 
Color scheme can be changed in the .css files in src/styles.
Add your own name throughout the site where the placeholder BANDNAME_HERE appears.
Add your own images and icons in public/images, and make sure to name them the same as the file they replace, or search for the old filename and update it where it appears in the .tsx files.

## rsvp
The RSVP page lets you track how many people are coming to the show, control who has the address, and approve/deny admission to account for capacity limits or banned guests.

If you don't host diy shows, you can delete this functionality.

## blog
The blog lets you post update messages that are publicly viewable on the site, without having to edit any code and redeploy. If a show is cancelled last minute or you forgot some important information on the poster, or you just want to announce a release, this is the place for that. 
Posts can be made and edited from the admin/blog page. Plain text is fine, but markdown has been implemented if you know what that is or want to **emphasize** text or add [links](http://www.google.com). 

If you don't want this functionality, you can delete it. The component will have to be removed where it is rendered. You can remove the div around the ```<BlogPostCard``` and remove the link in Header.tsx.

## connect a database if needed
If you just want a custom link tree site, delete all the extra stuff and add in your links, images, and color scheme. If you want the features like logging in, posting updates, and rsvp management, there is a little more work required. If you're non-technical, *this is for you*.

### database
mongodb atlas is a free database, you will have to pay if you exceed a certain amount of data stored, but the records we store are small and I haven't run into this limit yet.
It is easy to set up. Make an account, create a new atlas database and copy the connection string into the 'example.env' file. This lets your website save user accounts, rsvps, and blog posts. At this point, you should also download the mongodb compass program, and give it the same connection string. You can manually view the database for troubleshooting, and edit it to give accounts access to the admin pages.

## netauth + google account support
If you know what you are doing, you can connect any other account provider, or make your own (this is called credentials provider in the nextauth docs). I like google because it is one click and users don't need to remember a new login for your app if it's only occasionally used. If your target audience is likely to use discord, for example, follow the nextauth instructions for adding a discord login provider and delete the google provider I've included.
Check src/server/auth.ts to understand what's going on here and make any changes. If you are going with google accounts, you just need to make a google developer account, create a new project, and  add the client id and client secret to 'example.env'. The google web console will also need to have the url you deploy to, which is covered in the nextauth docs, and depends on your choice for deployment.

One caveat is that instagram blocks google oauth on their in-app browser. My workaround was to show instagram users a message asking them to open the page in another browser. I also put links on posters and other places besides instagram. Most people figure it out, but this is one roadblock I hope to fix in the future.

## how to deploy
It is recommended to use vercel for free hosting and domains. Follow the t3 app instructions below.


# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
