import { List, Header, Grid, Image} from "semantic-ui-react";
import '../../CSS/postitem.css';

const PostItem = (props) => {

  const { post } = props;
  return (
    <div className="item">
    <List.Item className="listItem" >
      <Grid>
        <Grid.Column width={3}>
          <Image src="data:image/jpeg;base64,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" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h5">{post.email}</Header>
          <List.Description className="listDescription">
            {post.message}
          </List.Description>
        </Grid.Column>
      </Grid>
    </List.Item>
    </div>
  );
};

export default PostItem;