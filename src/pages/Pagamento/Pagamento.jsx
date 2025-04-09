export default function Pagamento() {
    return (
        <>
            <div className="payment-container" 
            style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 187px)', // altura total menos o footer
                width: '100vw',
                textAlign: 'center',
            }}>
                <img src="/assets/Processing-bro.svg" style={{width :'600px'}}></img>
                <article style={{fontSize : '3em'}}>Pagina em Construção!</article>
            </div>
        </>
    )
}

