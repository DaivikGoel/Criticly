import * as React from 'react';
import ProfileInfo from '../components/profilescreen/ProfileInfo'
import { AuthContext } from '../navigation/RootNavigator'

export default function ProfileScreen() {
  const context = React.useContext(AuthContext);
  const personid = context.userid

  return (
      <ProfileInfo personid = {personid}/>
  );
}