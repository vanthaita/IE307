import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface PostCardProps {
  id: number;
  name: string;
  avatar: string;
  desc: string;
  picture: string;
  like: string | number;
  comment: string | number;
  shares: string | number;
  onAction: (action: string, id: number) => void;
  isLiked: boolean;
  isCommented: boolean;
  isShared: boolean;


}

const PostCard = ({
  id,
  name,
  avatar,
  desc,
  picture,
  like,
  comment,
  shares,
  onAction,
  isLiked,
  isCommented,
  isShared,
}: PostCardProps) => {
  return (
    <View className="mb-4 flex flex-col justify-between rounded-lg bg-white p-6">
      <View className="mb-4 flex flex-row items-center gap-x-4">
        <Image
          source={{ uri: avatar }}
          className="h-14 w-14 rounded-full"
          style={{ backgroundColor: '#000' }}
        />
        <Text className="text-lg font-semibold">{name}</Text>
      </View>

      <View className="mb-4 flex flex-col">
        <Text className="mb-2 text-xl text-gray-700">{desc}</Text>
        <Image source={{ uri: picture }} className="mb-4 h-56 w-full rounded-lg" />
        <View className="flex flex-row items-center justify-between text-gray-600">
          <Text>{like} Likes</Text>
          <Text>{comment} Comments</Text>
          <Text>{shares} Shares</Text>
        </View>
        <View className="mt-4 h-2 border-b-2 border-gray-100" />
      </View>

      <View className="mt-4 flex flex-row items-center justify-between">
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-x-2"
          onPress={() => onAction('Like', id)}>
          <FontAwesome name="thumbs-up" size={24} color={isLiked ? 'blue' : 'gray'} />
          <Text className="text-gray-600">{isLiked ? 'Liked' : 'Like'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-x-2"
          onPress={() => onAction('Comment', id)}>
          <FontAwesome name="comment" size={24} color={isCommented ? 'blue' : 'gray'} />
          <Text className="text-gray-600">Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center justify-center gap-x-2"
          onPress={() => onAction('Share', id)}>
          <FontAwesome name="share" size={24} color={isShared ? 'blue' : 'gray'} />
          <Text className="text-gray-600">Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
