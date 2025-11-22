import { useState } from 'react'
import img1 from '../../assets/images/product_16.jpg'
import img2 from '../../assets/images/product_17.jpg'
import img3 from '../../assets/images/product_19.jpg'
import img4 from '../../assets/images/product_20.jpg'

export default function ProductPage(){
  const images = [img1, img2, img3, img4]

  const [main, setMain] = useState(images[0])
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')

  return (
    <div className="container my-5">
      {/* Gallery left, product info right (smaller image with info beside it) */}
      <div className="row align-items-start mb-4">
        <div className="col-12 col-md-6">
          <div className="product-gallery card p-3 text-center">
            <div className="main-image mb-3">
              <img src={main} alt="product" className="img-fluid rounded" style={{maxHeight:480, width:'100%', objectFit:'cover'}} />
            </div>

            <div className="d-flex justify-content-center flex-wrap" style={{gap:8}}>
              {images.map((src, i) => (
                <button key={i} className={`thumb btn p-0 border ${main===src? 'active':''}`} onClick={() => setMain(src)}>
                  <img src={src} alt={`thumb-${i}`} style={{width:88, height:66, objectFit:'cover'}} className="rounded" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="product-info p-3">
            <h2 className="mb-2">Naturally Flavored Whey Protein</h2>
            <div className="mb-2">
              <span className="h4 text-danger me-2">$49.99</span>
              <small className="text-muted">(was $69.99)</small>
            </div>
            <div className="mb-2">
              <span className="badge bg-success me-2">In stock</span>
              <small className="text-muted">SKU: WP-001</small>
            </div>
            <div className="mb-3 text-muted small">
              Categories: <a href="#" onClick={e=>e.preventDefault()}>Protein</a>, <a href="#" onClick={e=>e.preventDefault()}>Whey</a>
            </div>
            <div className="mb-3 d-flex align-items-center" style={{gap:12}}>
              <div className="rating text-warning">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <small className="text-muted">(245 reviews)</small>
            </div>

            <p className="text-muted">High-quality whey protein for daily nutrition. This demo page uses sample images and static data.</p>

            <div className="mb-3 d-flex align-items-center" style={{gap:8}}>
              <label className="me-2 mb-0">Quantity</label>
              <div className="input-group" style={{width:140}}>
                <button className="btn btn-outline-secondary" onClick={()=>setQty(q=>Math.max(1,q-1))}>-</button>
                <input type="number" className="form-control text-center" value={qty} onChange={e=>setQty(Math.max(1, Number(e.target.value)||1))} />
                <button className="btn btn-outline-secondary" onClick={()=>setQty(q=>q+1)}>+</button>
              </div>
            </div>

            <div className="mb-3 d-flex" style={{gap:12}}>
              <button className="btn btn-primary btn-lg">Add to cart</button>
              <button className="btn btn-outline-secondary">Add to wishlist</button>
            </div>

            <div className="mt-4">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={`nav-link ${tab==='description'?'active':''}`} href="#" onClick={e=>{e.preventDefault(); setTab('description')}}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${tab==='additional'?'active':''}`} href="#" onClick={e=>{e.preventDefault(); setTab('additional')}}>Additional information</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${tab==='reviews'?'active':''}`} href="#" onClick={e=>{e.preventDefault(); setTab('reviews')}}>Reviews (245)</a>
                </li>
              </ul>

              <div className="tab-content border p-3">
                {tab==='description' && (
                  <div>
                    <h5>Product description</h5>
                    <p>This premium whey protein blend provides high-quality protein to help support muscle recovery and growth. Flavored naturally and manufactured under strict quality controls. Use this demo text as a placeholder.</p>
                    <ul>
                      <li>24g protein per serving</li>
                      <li>5.5g BCAAs</li>
                      <li>Low sugar</li>
                    </ul>
                  </div>
                )}

                {tab==='additional' && (
                  <div>
                    <h5>Additional information</h5>
                    <p>Net weight: 2 lb (908 g). Serving size: 1 scoop (30 g).</p>
                  </div>
                )}

                {tab==='reviews' && (
                  <div>
                    <h5>Customer reviews</h5>
                    <div className="mb-3">
                      <strong>John D.</strong>
                      <div className="text-warning"><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /></div>
                      <p>Great product — excellent taste and mixes well.</p>
                    </div>
                    <small className="text-muted">Showing 1 of 245 reviews (demo)</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products under the product info */}
      <div className="row mt-4">
        <div className="col-12">
          <h4 className="mb-3">Related products</h4>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {images.map((src, i) => (
              <div key={i} className="col">
                <div className="card h-100">
                  <img src={src} alt={`related-${i}`} style={{height:160, objectFit:'cover'}} className="card-img-top" />
                  <div className="card-body p-2">
                    <div className="small">Product demo #{i+1}</div>
                    <div className="fw-bold">$29.99</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
