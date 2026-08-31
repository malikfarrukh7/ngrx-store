import { minLength, required, schema, validate } from '@angular/forms/signals';


export type RegisterModel = {
  username: string;
  email:string;
  password: string;
  confirmPassword: string;
};

export const registerSchema = schema<RegisterModel>((rootpath) => {
  required(rootpath.username,
    {message: 'Username is required"'}
  );
  required(rootpath.email,
    {message: 'Email is required'}
  );
  required(rootpath.password,
    {message: ' password is required'}
  );
  minLength(rootpath.password,
    6,
    {message:'password must be atleast 6 character long'}
  );
  required(rootpath.confirmPassword,
    {message:'Confirm Password is required'}
  );

  validate(rootpath.confirmPassword,({value, valueOf}) =>  {

    const password = valueOf(rootpath.password);
    const confirmPassword = value();


    if(!password){
      return null;
    }

    if(password !== confirmPassword){

      return{
        kind: 'passwordMismatch',
        message: 'passwords do not match'
      };
    }



    return null;

  });

})
