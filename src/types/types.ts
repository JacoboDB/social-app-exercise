export type CommentType = {
    description: String,
    id: String,
    authorId: String,
    authorName: String,
    creationDate: Date,


}

export type PostType = {
    id: String,
    imageUrl: String,
    description?: String,
    creationDate: Date,
    likes?: Number,
    comments?: CommentType[],
    authorName: String,
    authorId: String

}

export type ProfileType = {
    id: String,
    name: String,
    description: String;
    followers: Number;
    following: Number;
    posts?: PostType[]
}
