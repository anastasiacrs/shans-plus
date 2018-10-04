export interface IntroFeatureItemConfig{
    title:string,
    description:string
}

export interface IntroConfig {
    title:string,
    subtitle:string,
    features:Array<IntroFeatureItemConfig>
}