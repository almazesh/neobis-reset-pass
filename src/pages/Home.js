const Home = () =>{
    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return(
        <div style={style}>
            <div className="card">
                <div className="card-body">
                    <h1 className="text-center">
                        <a className="btn btn-danger" href="https://neobis-fms.netlify.app/resetpassword/">Для сброса пароли перейдите по этой ссылке</a>
                    </h1>
                </div>
            </div>

        </div>

    )
}

export default Home;