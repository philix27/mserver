import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Static_MiniAppsResponse {
    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    logo: string;

    @Field()
    url: string;

    @Field({ nullable: true })
    aboutInfo?: string;
}



export const miniAppsList: Static_MiniAppsResponse[] = [
    {
        title: "Rewards",
        description: "Review this app and get rewarded",
        logo: "https://www.mobarter.com/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75",
        url: "https://tg.mobarter.com/rewards"
    },
    {
        title: "Enviable Transport",
        description: "Invest in real world assets. We help you buy a keke vehicle, find a suitable rider and pay you intrest on a monthly basis.",
        logo: "https://www.mobarter.com/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75",
        url: "https://www.enviabletransport.com/"
    },

]