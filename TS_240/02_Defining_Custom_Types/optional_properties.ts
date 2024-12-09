interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  return `Name: ${userInfo.name}\n` + 
         `Email: ${userInfo.email || 'N/A'}\n` +
         `Age: ${userInfo.age || 'Unknown'}`;
}