import withAuth from '../components/WithAuth';

const Admin = () => (
  <p>This is the admin page</p>
)

export default withAuth(Admin)