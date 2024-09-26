import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '~/components/Header';
import PostCard from '~/components/PostCard';

const initialData = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
    desc: 'Enjoying the sunny weather!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 123,
    comment: 45,
    shares: 10,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://example.com/avatar2.jpg',
    desc: 'Had an amazing adventure today!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 200,
    comment: 30,
    shares: 8,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    avatar: 'https://example.com/avatar3.jpg',
    desc: 'Loving this movie poster design!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 150,
    comment: 25,
    shares: 12,
  },
  {
    id: 4,
    name: 'Alice Cooper',
    avatar: 'https://example.com/avatar4.jpg',
    desc: 'Hiking with friends was a blast!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 175,
    comment: 35,
    shares: 7,
  },
  {
    id: 5,
    name: 'David Beckham',
    avatar: 'https://example.com/avatar5.jpg',
    desc: 'Caught an amazing sunset!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 250,
    comment: 40,
    shares: 15,
  },
  {
    id: 6,
    name: 'Emily Watson',
    avatar: 'https://example.com/avatar6.jpg',
    desc: 'Just finished an epic run!',
    picture:
      'https://cdn.leonardo.ai/users/ab0ec2f7-cc56-42f9-a050-2fbc111575f2/generations/38b761d8-61a8-4896-920b-216f39f9bb56/Leonardo_Phoenix_Movie_poster_psychological_thriller_Frequency_3.jpg?w=512',
    like: 220,
    comment: 28,
    shares: 9,
  },
];

const HomeScreen = () => {
  const [posts, setPosts] = useState(initialData);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [commentedPosts, setCommentedPosts] = useState<number[]>([]);
  const [sharedPosts, setSharedPosts] = useState<number[]>([]);

  const handleAction = useCallback(
    (action: string, id: number) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === id) {
            if (action === 'Like') {
              if (!likedPosts.includes(id)) {
                setLikedPosts((prevLikedPosts) => [...prevLikedPosts, id]);
                return { ...post, like: post.like + 1 };
              } else {
                const updatedLikedPosts = likedPosts.filter((likePostId) => likePostId !== id);
                setLikedPosts(updatedLikedPosts);
                return { ...post, like: post.like - 1 };
              }
            } else if (action === 'Comment') {
              if (!commentedPosts.includes(id)) {
                setCommentedPosts((prevCommentedPosts) => [...prevCommentedPosts, id]);
                return { ...post, comment: post.comment + 1 };
              } else {
                const updatedCommentedPosts = commentedPosts.filter(
                  (commentId) => commentId !== id
                );
                setCommentedPosts(updatedCommentedPosts);
                return { ...post, comment: post.comment - 1 };
              }
            } else if (action === 'Share') {
              if (!sharedPosts.includes(id)) {
                setSharedPosts((prevSharedPosts) => [...prevSharedPosts, id]);
                return { ...post, shares: post.shares + 1 };
              } else {
                const updatedSharedPosts = sharedPosts.filter((shareId) => shareId !== id);
                setSharedPosts(updatedSharedPosts);
                return { ...post, shares: post.shares - 1 };
              }
            }
          }
          return post;
        })
      );
    },
    [likedPosts, commentedPosts, sharedPosts]
  );

  return (
    <SafeAreaView className="bg-white-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        <Header />
        <View className="p-4">
          <View className="flex flex-col gap-y-8">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                {...post}
                onAction={handleAction}
                isLiked={likedPosts.includes(post.id)}
                isCommented={commentedPosts.includes(post.id)}
                isShared={sharedPosts.includes(post.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
