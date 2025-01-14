import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH=

{
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials:{
                username: { label: 'Username', type: 'text', placeholder: 'email' },
                password: { label: 'password', type: 'password', placeholder: 'password' },
            },
            async authorize(credentials: any) {
                console.log(credentials)
            
                
                return {
                    id: "1",
                    name:"sahithi",
                    email:"sahithi@gmail.com"
                };

            },
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{

       session:({session, user, token}: any)=>{
            if(session && session.user){
                 session.user.id=token.sub
                }
           
            return session
       }
    }

}