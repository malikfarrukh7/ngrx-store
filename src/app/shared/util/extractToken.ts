export type Payload = {
  sub: string;
  user:string;
};


export const extractToken = (token: string): Payload | null => {

  try{
    const payloadBase64 = token?.split('.')[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);
    return payload;

  }catch (error){

    console.error('Failed to extract token payload:', error);
    return null;

  }
};
