function NotFound() {
    document.title = 'Not Found';
    return (
        <div className={`w-full h-[100dvh]`}>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-auto h-auto flex flex-col items-center gap-1">
                    <p className="text-4xl myfont-Winky">{`Kopi Nusa`}</p>
                    <p className="text-2xl">{`Halaman Tidak Ditemukan`}</p>
                    <button onClick={() => window.location.href = "/"}>{`Kembali`}</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;