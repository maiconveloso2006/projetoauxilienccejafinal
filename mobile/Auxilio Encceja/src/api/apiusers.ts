import { API_HOST } from "./apiconfig";

const ENDPOINT = "/users";

const url = `${API_HOST}${ENDPOINT}`;

export async function GET(){

    const response = await fetch(url,{
        method: "GET",
        headers: {
            "content-Type":"application/json",
        }
    }
    );
    const data = await response.json();

    return data.data ;
}


export async function UserCreate ( newUser:any ): Promise<boolean>  {
  try {
      
      const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if ( !data) return false

    return data.message === "Success";

  } catch (error) {

    console.error("Erro ao acessar API:", error);   
    return false;

  }  
}

export async function UsersDelete(id:number|undefined) {
    
    try {

        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            
        });

        //console.log( response );
        const data = await response.json();
        
        //console.log( data )
        return data.data;

    } catch (error) {
        return {
            "message": "Success",
            "data": []
            }
    }
}


export async function UserUpdate (  payload:any, id: number | undefined ): Promise<boolean>  {
  try {
    console.log( id );
      const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if ( !data) return false

    return data.message === "Success";

  } catch (error) {

    console.error("Erro ao acessar API:", error);   
    return false;

  }  
}