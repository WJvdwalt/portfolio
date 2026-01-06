export default function HeroSection() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center">
                    {/* Image placeholder */}
                    <div 
                    className="rounded-4 mb-3"
                    style={{
                        width: 140,
                        height: 140,
                        background: "linear-gradient(180deg, #e9e2f6 0%, #7b5bd6 100%)",
                    }}
                    />

                    <h1 className="h4 mb-1"> WJ van der Walt </h1>
                    <div className="text-muted small"> Graduate Software Engineer at Gendac </div>
                    <div className="text-muted small"> Passionate about Systems Design &amp; Machine Learning </div>

                    {/* Social Icons row */}
                    <div className="d-flex gap-3 mb-2">
                        <button type="button" className="btn btn-light border rounded-circle" style={{ width: 36, height: 36 }}>
                            GH
                        </button>
                        <button type="button" className="btn btn-light border rounded-circle" style={{ width: 36, height: 36 }}>
                            IN
                        </button>
                        <button type="button" className="btn btn-light border rounded-circle" style={{ width: 36, height: 36 }}>
                            MAIL
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}