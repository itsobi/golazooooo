import ClickablePost from './ClickablePost';
import NonClickablePost from './NonClickablePost';

export type Post = {
  id: string;
  title: string;
  body: string;
  created_at: string;
  image: string;
  community_value: string;
  clerk_user_id: string;
  likes: number;
  username: string;
};

export default function Post({ post }: { post: Post }) {
  if (post.community_value === 'general') {
    return <NonClickablePost post={post} />;
  } else {
    return <ClickablePost post={post} />;
  }
}
