import React, {useEffect, useState} from 'react';
import './Reset.css';

const Reset = (props) =>{
    const [isLinkVerified, setIsLinkVerified] = useState(false);
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const urlUid = props.match.params.uid;
    const urlToken = props.match.params.token;

    useEffect(() =>{
        fetch(`http://neobisfms.herokuapp.com/api/user/reset-password/verify-token/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uidb64: urlUid,
                token: urlToken
            })
        }).then(response => response.json())
        .then(res =>{
            if(res.token){
                console.log('Success')
                setIsLinkVerified(true)
            }
        }).catch(err =>{
            console.log("Failed");
            setIsLinkVerified(false)
        })
    }, []);

    const handleSubmit = e =>{
        e.preventDefault();

        if(pass1 === pass2){
            fetch('http://neobisfms.herokuapp.com/api/user/reset-password/complete-reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uidb64: urlUid,
                    token: urlToken,
                    password1: pass1,
                    password2: pass2
                })
            })
            .then(response => response.json())
            .then(res =>{
                alert(res.message);
            })
        }else{
            alert('Пароли не совпадают')
        }
    }

    return(
        <div className="container">
            {
                isLinkVerified ? (
                    <div className="card">
                        <h5 className="text-center pt-3">Введите новый пароль</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Введите новый пароль" onChange={e => setPass1(e.target.value)} value={pass1} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Подтвердите новый пароль" onChange={e => setPass2(e.target.value)} value={pass2} />
                                </div>
                            </div>
                            <div className="text-center mt-3 mb-3">
                                <button className="btn btn-success">Сбросить</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h1>Данная ссылка просрочена!</h1>
                    </div>
                )
            }
            
        </div>
    )
}

export default Reset