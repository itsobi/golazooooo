import CommunityPost from './CommunityPost';
import GeneralPost from './GeneralPost';

export type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  image: string;
  community_value: string;
  community_label: string;
  author: string;
  likes: number;
  username: string;
};

export default function Post({ post }: { post: Post }) {
  if (post.community_value === 'general') {
    return <GeneralPost post={post} />;
  } else {
    return <CommunityPost post={post} />;
  }
}
