import React from 'react';
import { motion } from 'framer-motion';

const publications = [
  {
    title: "Mapping Inherited Fractures in the Critical Zone Using Seismic Anisotropy From Circular Surveys",
    authors: "CG Novitsky, WS Holbrook, BJ Carr, S Pasquet, D Okaya, BA Flinchum",
    journal: "Geophysical Reseach Letters",
    year: "2018",
    type: "Journal Article",
    abstract: "Weathering and hydrological processes in Earth's shallow subsurface are influenced by inherited bedrock structures, such as bedding planes, faults, joints, and fractures. However, these structures are difficult to observe in soil-mantled landscapes. Steeply dipping structures with a dominant orientation are detectable by seismic anisotropy, with fast wave speeds along the strike of structures. We measured shallow (~2–4 m) seismic anisotropy using “circle shots,” geophones deployed in a circle around a central shot point, in a weathered granite terrain in the Laramie Range of Wyoming. The inferred remnant fracture orientations agree with brittle fracture orientations measured at tens of meters depth in boreholes, demonstrating that bedrock fractures persist through the weathering process into the shallow critical zone. Seismic anisotropy positively correlates with saprolite thickness, suggesting that inherited bedrock fractures may control saprolite thickness by providing preferential pathways for corrosive meteoric waters to access the deep critical zone.",
    links: {
      pdf: "https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1002/2017GL075976",
      doi: "10.1002/2017GL075976",
    },
    tags: ["Seismic Tomography"]
  },
  {
    title: "pSIN: A scalable, Parallel algorithm for Seismic INterferometry of large-N",
    authors: "Po Chen, Nicholas J Taylor, Ken G Dueker, Ian S Keifer, Andra K Wilson, Casey L McGuffy, Christopher G Novitsky, Alec J Spears, W Steven Holbrook",
    journal: "Computers & Geosciences",
    year: "2016",
    type: "Journal Article",
    abstract: "Seismic interferometry is a technique for extracting deterministic signals (i.e., ambient-noise Green's functions) from recordings of ambient-noise wavefields through cross-correlation and other related signal processing techniques. The extracted ambient-noise Green's functions can be used in ambient-noise tomography for constructing seismic structure models of the Earth's interior. The amount of calculations involved in the seismic interferometry procedure can be significant, especially for ambient-noise datasets collected by large seismic sensor arrays (i.e., “large-N” data). We present an efficient parallel algorithm, named pSIN (Parallel Seismic INterferometry), for solving seismic interferometry problems on conventional distributed-memory computer clusters. The design of the algorithm is based on a two-dimensional partition of the ambient-noise data recorded by a seismic sensor array. We pay special attention to …",
    links: {
      pdf: "https://pdf.sciencedirectassets.com/271720/1-s2.0-S0098300416X00076/1-s2.0-S009830041630125X/am.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLWVhc3QtMSJIMEYCIQCqWNbzrJerEXFMJj%2BM4Dg8Ll1RM5Be1sFyhp2OaiDlZQIhAMksXlP6%2FaeIHsm1Cg9VRUI7HJdKSAWtP5CNY%2B%2BigShrKrsFCPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1IgyQT8DWs45ymX8FiMwqjwUmqF2MQSzgppFlOyssjPX5jVBvahPvEY5pia8MD60mUligwgwh1ecB%2FdSYcVd0fgOMM9gpUGqRLRLrtQBesapjuQkZ3aCUwpXgfl6w5%2FbsdAU6AKcUXn1cake%2FKUDiMlsjRuCY6ciTQtgv7Z3B4wzqSLF%2Bf90%2Fdgs%2BuVeS5eHdWC0Kp4XhYx4eOdxEvM2sCUIUsD2RuunUwWbsWrXfAtiDEVNNe0nW433c%2BFidwAxIcJpJTCO1zQMlmo2wdqCLy5D8D95Jo6fKMrSqroNpxFBHSieZBR8ErkqKBY%2FgjI%2BldAw%2FqwnP4B7aWMfSNHQ87Cp5w58xzdvF5%2F9hHJP0BPQ4IiDt5T1BZkjBE7LVDfUlI1B%2FF4mg%2FxLMvlZl2XGi8TM%2Fo%2FGwcWOssJX%2Br65r5LtgjLjcAFPyYkkQXhHMb7DXQpHuMjHTOJ2%2BFuvoh%2FpunBlVkBGtoZa%2BYNQIWG%2F6ACz%2FIL3EGtS8mAomexgbcTp%2F5RpJEFMXoSfOkXFHfuebQeGI2%2BohtsIUOxRQZvx7JWAPF64IYQ2aTixG1h%2FvyA1yqf9SriZe8XJGJvFZBMfF8Zya9qemeyqZ%2FaxIyM1hgAc7NANLW3EfYDT%2BIlSZ5XdPbENqoL02%2FVdZve%2FRaZLyhwkALOLDNKw%2FEe39s2OCgEi5KlomKgrPZFAzTUnTto0fIt4JFP9aTnIC15kY4ykBL4zWDXS%2BqKxmeCDwm1MvkrHddaEC3DBKAXN2FJnywQTHTToZc6uHahM4Vm51BmijFZMGMmiUU28x%2FKsGVyvhszZ2TDeDTlNUDQQY29%2BAEuI7J1lhVpqSQk1ySAXTrZJ7IzRnhPbxsEGqVb1QVUqNd2zwrhozVlywGOw9%2BDClmob5MJH198EGOrAB1qbah0hJP%2FlPt2DjIxurL4QBSCZr2vPPtWy24o9r6FWegfnO3EmnH9NWWbhcShg5wOQJ121YWXNwaZjyJVgUlnEpqqZfkVltgSKQC2ceUNtwlqi11IOYKuCuArmXrHs%2BNXst8uR6Ej2r6eYpiwfRlqrxgBSmQiFvU0XX2vEEmpRdsVtvyynNBOQjik%2F6Txbuh6AmyRcZ5rqsVegxbXHe5KpFAmOneH2y6G%2BTEQoIRAs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250602T202653Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYQOTW6HNV%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8a82b9ecc871ae8a02f89ad40c431947b022ad1ed8f3147d89c2433e570983ba&hash=7b6320d25af74b8f654026d2abd8d94cac1a82deda63175700368fa3b26d0b68&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S009830041630125X&tid=pdf-ecf68d84-a119-4d2b-9faf-02432aa4d1bf&sid=c12cab666eeb104efb893638bacf15062459gxrqa&type=client",
    },
    tags: ["Seismic interferometry"]
  }
];

const Publications = () => (
  <section className="py-24 md:py-32">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section-heading numbered-heading text-xl md:text-2xl mb-16 flex items-center w-full text-lightest-slate after:content-[''] after:block after:relative after:w-full after:h-px after:ml-4 after:bg-lightest-navy"
      data-number="05"
    >
      Publications & Research
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 text-slate max-w-2xl"
    >
      Here are some of my research publications and contributions:
    </motion.p>

    <div className="space-y-8">
      {publications.map((pub, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="bg-light-navy rounded-lg p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'}}
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-mono bg-green-tint text-green rounded-full">
              {pub.type}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-lightest-slate mb-3 leading-tight">
            {pub.title}
          </h3>
          <div className="mb-4 text-sm text-light-slate">
            <p className="mb-1">{pub.authors}</p>
            <p className="italic">{pub.journal}, {pub.year}</p>
          </div>
          <p className="text-slate mb-6 leading-relaxed">
            {pub.abstract}
          </p>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {pub.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-mono bg-lightest-navy text-light-slate rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {pub.links.pdf && (
              <a 
                href={pub.links.pdf}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-green border border-green rounded hover:bg-green-tint transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF
              </a>
            )}
            {pub.links.doi && (
              <a 
                href={`https://doi.org/${pub.links.doi}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-green border border-green rounded hover:bg-green-tint transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI
              </a>
            )}
            {pub.links.arxiv && (
              <a 
                href={pub.links.arxiv}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-green border border-green rounded hover:bg-green-tint transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Publications;
