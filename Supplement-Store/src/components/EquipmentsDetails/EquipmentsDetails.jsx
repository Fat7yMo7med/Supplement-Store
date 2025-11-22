import { useState } from 'react'
import img1 from '../../assets/images/eqipment/163f92a0-1c5a-4fbb-ac1e-bd5153551e84-thumbnail-1000x1000-70.jpg'
import img2 from '../../assets/images/eqipment/58da23b6-cb0d-432b-a24c-03feb602821f-thumbnail-1000x1000-70.jpg'
import img3 from '../../assets/images/eqipment/8b0c5203-cf0e-4234-b81b-0451d7ddf348-thumbnail-1000x1000-70.jpg'
import img4 from '../../assets/images/eqipment/eeb19894-5f7c-441b-b1b7-686f0579f4cf-thumbnail-1000x1000-70.jpg'

const items = [
  { id: 1, title: 'Multi Gym Pro', price: 799, sku: 'MG-001', img: img1, desc: 'All-in-one multi gym for full body workouts.' },
  { id: 2, title: 'Home Gym X', price: 599, sku: 'HX-002', img: img2, desc: 'Compact home gym with adjustable resistance.' },
  { id: 3, title: 'Power Station', price: 999, sku: 'PS-003', img: img3, desc: 'Commercial-grade power station for pro athletes.' },
  { id: 4, title: 'Compact Gym', price: 449, sku: 'CG-004', img: img4, desc: 'Space-saving gym for small apartments.' },
]

export default function EquipmentPage(){
  const [selected, setSelected] = useState(items[0])
  const [main, setMain] = useState(selected.img)
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState('description')

  // when selected changes, update main
  const selectItem = (it) => { setSelected(it); setMain(it.img); setTab('description'); setQty(1) }

  const related = items.filter(i => i.id !== selected.id)

  return (
    <div className="container my-5">
      <div className="row align-items-start mb-4">
        <div className="col-12 col-md-6">
          <div className="product-gallery card p-3 text-center">
            <div className="main-image mb-3">
              <img src={main} alt="equipment" className="img-fluid rounded" style={{maxHeight:520, width:'100%', objectFit:'cover'}} />
            </div>
            <div className="d-flex justify-content-center flex-wrap" style={{gap:8}}>
              {items.map((it, i) => (
                <button key={it.id} className={`thumb btn p-0 border ${main===it.img? 'active':''}`} onClick={() => { setMain(it.img); setSelected(it) }}>
                  <img src={it.img} alt={`thumb-${i}`} style={{width:88, height:66, objectFit:'cover'}} className="rounded" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="product-info p-3">
            <h2 className="mb-2">{selected.title}</h2>
            <div className="mb-2">
              <span className="h4 text-danger me-2">${selected.price}</span>
              <small className="text-muted">(was ${(selected.price*1.2).toFixed(2)})</small>
            </div>
            <div className="mb-2">
              <span className="badge bg-success me-2">In stock</span>
              <small className="text-muted">SKU: {selected.sku}</small>
            </div>
            <div className="mb-3 text-muted small">
              Categories: <a href="#" onClick={e=>e.preventDefault()}>Equipment</a>, <a href="#" onClick={e=>e.preventDefault()}>Gym</a>
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

            <p className="text-muted">{selected.desc}</p>

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
                  <a className={`nav-link ${tab==='specs'?'active':''}`} href="#" onClick={e=>{e.preventDefault(); setTab('specs')}}>Specifications</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${tab==='reviews'?'active':''}`} href="#" onClick={e=>{e.preventDefault(); setTab('reviews')}}>Reviews (245)</a>
                </li>
              </ul>

              <div className="tab-content border p-3">
                {tab==='description' && (
                  <div>
                    <h5>Product description</h5>
                    <p>{selected.desc} This equipment is built to last and designed for performance.</p>
                  </div>
                )}

                {tab==='specs' && (
                  <div>
                    <h5>Specifications</h5>
                    <ul>
                      <li>Dimensions: 200 x 120 x 210 cm</li>
                      <li>Weight: 150 kg</li>
                      <li>Material: Steel</li>
                    </ul>
                  </div>
                )}

                {tab==='reviews' && (
                  <div>
                    <h5>Customer reviews</h5>
                    <div className="mb-3">
                      <strong>Sam P.</strong>
                      <div className="text-warning"><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /></div>
                      <p>Solid machine — great for home gyms.</p>
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
          <h4 className="mb-3">Related equipment</h4>

          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {related.map((src, i) => (
              <div key={src.id} className="col">
                <div className="card h-100" onClick={()=>selectItem(src)} style={{cursor:'pointer'}}>
                  <img src={src.img} alt={`related-${i}`} style={{height:160, objectFit:'cover'}} className="card-img-top" />
                  <div className="card-body p-2">
                    <div className="small">{src.title}</div>
                    <div className="fw-bold">${src.price}</div>
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

