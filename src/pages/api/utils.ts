import { PostType, ProfileType } from "@/types/types";

export const posts: PostType[] = [
    {
        id: "1",
        imageUrl: "https://picsum.photos/500/300?random=1",
        description: "A beautiful sunset over the mountains.",
        creationDate: new Date("2023-10-01T08:00:00Z"),
        likes: 15,
        comments: [
            {
                description: "Stunning view!",
                id: "c1",
                authorId: "a1",
                authorName: "John Doe",
                creationDate: new Date("2023-10-01T08:05:00Z"),
            },
            {
                description: "Where was this taken?",
                id: "c2",
                authorId: "a2",
                authorName: "Jane Smith",
                creationDate: new Date("2023-10-01T08:10:00Z"),
            },
        ],
        authorName: "John Doe",
        authorId: "a1",
    },
    {
        id: "2",
        imageUrl: "https://picsum.photos/500/300?random=2",
        description: "Exploring the city streets.",
        creationDate: new Date("2023-10-02T09:00:00Z"),
        likes: 8,
        comments: [
            {
                description: "Love the vibe!",
                id: "c3",
                authorId: "a1",
                authorName: "John Doe",
                creationDate: new Date("2023-10-02T09:15:00Z"),
            },
        ],
        authorName: "John Doe",
        authorId: "a1",
    },
    {
        id: "3",
        imageUrl: "https://picsum.photos/500/300?random=3",
        description: "Morning coffee and a good book.",
        creationDate: new Date("2023-10-03T07:00:00Z"),
        likes: 20,
        comments: [],
        authorName: "Jane Smith",
        authorId: "a2",
    },
    {
        id: "4",
        imageUrl: "https://picsum.photos/500/300?random=4",
        description: "Hiking through the forest.",
        creationDate: new Date("2023-10-04T10:00:00Z"),
        likes: 12,
        comments: [
            {
                description: "Looks like a great trail!",
                id: "c4",
                authorId: "a2",
                authorName: "Jane Smith",
                creationDate: new Date("2023-10-04T10:30:00Z"),
            },
        ],
        authorName: "Jane Smith",
        authorId: "a2",
    },
    {
        id: "5",
        imageUrl: "https://picsum.photos/500/300?random=5",
        description: "A cozy evening by the fireplace.",
        creationDate: new Date("2023-10-05T18:00:00Z"),
        likes: 25,
        comments: [],
        authorName: "John Doe",
        authorId: "a1",
    },
    {
        id: "6",
        imageUrl: "https://picsum.photos/500/300?random=6",
        description: "Weekend getaway to the beach.",
        creationDate: new Date("2023-10-06T12:00:00Z"),
        likes: 30,
        comments: [
            {
                description: "Wish I was there!",
                id: "c5",
                authorId: "a1",
                authorName: "John Doe",
                creationDate: new Date("2023-10-06T12:15:00Z"),
            },
        ],
        authorName: "John Doe",
        authorId: "a1",
    },
    {
        id: "7",
        imageUrl: "https://picsum.photos/500/300?random=7",
        description: "Experimenting with new recipes.",
        creationDate: new Date("2023-10-07T14:00:00Z"),
        likes: 10,
        comments: [],
        authorName: "Jane Smith",
        authorId: "a2",
    },
    {
        id: "8",
        imageUrl: "https://picsum.photos/500/300?random=8",
        description: "Art gallery visit.",
        creationDate: new Date("2023-10-08T16:00:00Z"),
        likes: 18,
        comments: [
            {
                description: "Which gallery is this?",
                id: "c6",
                authorId: "a2",
                authorName: "Jane Smith",
                creationDate: new Date("2023-10-08T16:20:00Z"),
            },
        ],
        authorName: "Jane Smith",
        authorId: "a2",
    },
    {
        id: "9",
        imageUrl: "https://picsum.photos/500/300?random=9",
        description: "Sunrise yoga session.",
        creationDate: new Date("2023-10-09T06:00:00Z"),
        likes: 22,
        comments: [],
        authorName: "John Doe",
        authorId: "a1",
    },
    {
        id: "10",
        imageUrl: "https://picsum.photos/500/300?random=10",
        description: "Weekend road trip.",
        creationDate: new Date("2023-10-10T09:00:00Z"),
        likes: 14,
        comments: [
            {
                description: "Safe travels!",
                id: "c7",
                authorId: "a1",
                authorName: "John Doe",
                creationDate: new Date("2023-10-10T09:10:00Z"),
            },
        ],
        authorName: "John Doe",
        authorId: "a1",
    },
];


export const getUniqueUsers = (): ProfileType[] => {
    const usersMap = new Map<string, ProfileType>();

    posts.forEach((post) => {
        if (!usersMap.has(post.authorId.toString())) {
            usersMap.set(post.authorId.toString(), {
                id: post.authorId,
                name: post.authorName,
                description: `Profile of ${post.authorName}`,
                followers: Math.floor(Math.random() * 1000), 
                following: Math.floor(Math.random() * 1000),
            });
        }
    });
    return Array.from(usersMap.values());
};

export const getUser = (id: string) => {
    return getUniqueUsers().find(user => user.id.toString() === id);
}
