export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specifications: string[];
  basePricePerUnit: number;
  unitLabel: string;
  typicalDuration: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'structural-rebar',
    number: '01',
    title: 'Structural Rebar & Steelwork Framing',
    shortDesc: 'Precision steel fixing, high-tensile rebar cages, columns, beams, and engineered mesh for high-load structural resilience.',
    fullDesc: 'Our certified steel-fixing crews fabricate and install engineered high-tensile reinforcement cages, ground beam rebar, raft foundation grids, and suspended slab steelwork in strict accordance with structural engineer bending schedules and SANS 10144 standards.',
    image: '/src/assets/images/project_rebar_foundation_1794252110130.jpg',
    specifications: [
      'High-tensile Y10, Y12, Y16 & Y20 deformed steel rebar',
      'Ref 245, 395, and 617 welded reinforcing mesh',
      'Engineered concrete cover spacer blocks (30mm - 50mm)',
      'Ground beam cages, column starter bars, and shear links',
    ],
    basePricePerUnit: 680,
    unitLabel: 'm²',
    typicalDuration: '3 - 6 Days',
  },
  {
    id: 'residential-commercial',
    number: '02',
    title: 'Modern Residential & Commercial Building',
    shortDesc: 'Turnkey structural construction for luxury contemporary homes, commercial offices, and multi-storey industrial developments.',
    fullDesc: 'From sub-structure ground breaking to superstructure concrete frames and architectural masonry, JBM Infracivils delivers high-end residential and commercial builds with NHBRC warranty compliance, precision plumb lines, and superior structural durability.',
    image: '/src/assets/images/project_luxury_residential_1794252111102.jpg',
    specifications: [
      'NHBRC registered structural home & building standards',
      'Reinforced concrete columns, ring beams, and floor slabs',
      'Precision load-bearing masonry and boundary walls',
      'Turnkey civil project management with dedicated on-site foremen',
    ],
    basePricePerUnit: 2450,
    unitLabel: 'm²',
    typicalDuration: '4 - 16 Weeks',
  },
  {
    id: 'retaining-walls',
    number: '03',
    title: 'Retaining Walls & Terraforce Earthworks',
    shortDesc: 'Engineered Terraforce and concrete block retaining systems for steep slope stabilization, terracing, and erosion defense.',
    fullDesc: 'Specialized earth retention and slope stabilization utilizing interlocking Terraforce blocks, engineered cut & fill earthworks, and subsoil geofabric filtration. Prevents soil migration and creates usable leveled terraces on complex South African sloped terrain.',
    image: '/src/assets/images/project_retaining_wall_1794252111467.jpg',
    specifications: [
      'Terraforce L11, L12, and 4x4 interlocking retaining block units',
      'Bidim A2 / A4 non-woven geotextile drainage membrane',
      '110mm slotted subsoil agricultural weep drainage pipes',
      'Geogrid structural reinforcement for walls over 1.2m height',
    ],
    basePricePerUnit: 1450,
    unitLabel: 'm²',
    typicalDuration: '4 - 8 Days',
  },
  {
    id: 'concrete-slab-dpm',
    number: '04',
    title: 'Concrete Slab Foundation & Waterproofing (DPM)',
    shortDesc: 'Cast-in-place raft and strip foundations with heavy-duty 250-micron damp-proof membrane (DPM) and laser-leveled finish.',
    fullDesc: 'Monolithic concrete foundations engineered for maximum load distribution. We incorporate heavy 250-micron USB Green polyethylene damp-proof membrane (DPM) with heat-taped seams, perimeter starter bars, and power-floated concrete for a flawless, crack-resistant foundation.',
    image: '/src/assets/images/project_rebar_foundation_1794252110130.jpg',
    specifications: [
      'Ready-mix concrete 25MPa - 35MPa with certified slump tests',
      '250-micron USB Green SABS-approved DPM waterproof sheeting',
      'Laser-guided leveling and high-tolerance power-troweled finish',
      'Compacted G5/G6 sub-base layer to 93% Mod AASHTO',
    ],
    basePricePerUnit: 890,
    unitLabel: 'm²',
    typicalDuration: '3 - 7 Days',
  },
  {
    id: 'civil-drainage',
    number: '05',
    title: 'Civil Drainage & Underground Pipe Installation',
    shortDesc: 'Deep stormwater pipe culverts, sewer mains, laser-aligned trenching, and municipal infrastructure connections.',
    fullDesc: 'Heavy civil underground utility engineering. We excavate, shore, and install large-diameter concrete stormwater pipes, HDPE sewer lines, inspection manholes, and stormwater attenuation tanks with precision laser grade controls.',
    image: '/src/assets/images/project_drainage_pipes_1794252127706.jpg',
    specifications: [
      'Concrete culvert pipes (300mm to 900mm diameter)',
      'Laser-aligned trenching with hydraulic trench box shoring',
      'Clean 19mm bedding gravel and compacted pipe surround',
      'Precast stormwater catchpits and brick-built inspection manholes',
    ],
    basePricePerUnit: 780,
    unitLabel: 'm',
    typicalDuration: '5 - 12 Days',
  },
  {
    id: 'paving-earthworks',
    number: '06',
    title: 'Paving, Site Clearance & Landscaping',
    shortDesc: 'Heavy-duty industrial and residential interlocking paving, site grading, bulk earthmoving, and perimeter civil works.',
    fullDesc: 'From heavy truck yards and commercial parking lots to luxury driveway paving and bulk bush clearance. We operate our own compaction rollers and excavators to guarantee uniform sub-base compaction, edge beam kerbing, and long-lasting paved surfaces.',
    image: '/src/assets/images/project_paving_clearance_1794252127689.jpg',
    specifications: [
      '60mm and 80mm heavy-duty interlocking pavers and beveled bond',
      'Industrial road kerbing (Figure 7 and 8 concrete kerbs)',
      'Mechanical site grading and bulk rock/vegetation clearance',
      'Plate compactor and tandem roller compaction with river sand jointing',
    ],
    basePricePerUnit: 520,
    unitLabel: 'm²',
    typicalDuration: '3 - 8 Days',
  },
];
