export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  scope: string;
  keySpecs: string;
  completionTime: string;
  clientType: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Reinforced Raft Foundation & Rebar Grid',
    category: 'Structural Rebar',
    location: 'Midrand, Gauteng',
    image: '/src/assets/images/project_rebar_foundation_1794252110130.jpg',
    scope: '640 m² high-load industrial warehouse foundation with dual-layer Y16 rebar mesh and 250μm DPM membrane.',
    keySpecs: '30MPa readymix, 40mm spacer chairs, SANS 10144 steel schedule',
    completionTime: '8 Days',
    clientType: 'Commercial Logistics Hub',
  },
  {
    id: 'proj-2',
    title: 'Terraforce Stepped Slope Retaining System',
    category: 'Retaining Walls',
    location: 'Pretoria East, Gauteng',
    image: '/src/assets/images/project_retaining_wall_1794252111467.jpg',
    scope: '320 m² engineered multi-tier Terraforce L11 retaining wall with Bidim A4 geofabric and 110mm slotted drainage lines.',
    keySpecs: 'Interlocking block terrace, 19mm stone filter backfill, geogrid ties',
    completionTime: '12 Days',
    clientType: 'Private Hillside Estate',
  },
  {
    id: 'proj-3',
    title: 'Multi-Storey Architectural Residential Build',
    category: 'Building Construction',
    location: 'Sandton, Johannesburg',
    image: '/src/assets/images/project_luxury_residential_1794252111102.jpg',
    scope: 'Turnkey structural concrete framing, suspended second-story floor slabs, and load-bearing masonry for luxury residence.',
    keySpecs: 'NHBRC registered warranty, reinforced concrete columns, laser survey',
    completionTime: '14 Weeks',
    clientType: 'Private Developer',
  },
  {
    id: 'proj-4',
    title: 'Civil Stormwater Culvert & Trench Excavation',
    category: 'Civil Drainage',
    location: 'Centurion, Gauteng',
    image: '/src/assets/images/project_drainage_pipes_1794252127706.jpg',
    scope: '480 meters of 600mm spigot & socket concrete stormwater pipes with hydraulic shoring and precast junction manholes.',
    keySpecs: 'Laser grade gradient 1:120, SABS 677 concrete pipes, safety shoring',
    completionTime: '10 Days',
    clientType: 'Municipal Development Contractor',
  },
  {
    id: 'proj-5',
    title: 'Commercial Interlocking Paving & Heavy Earthworks',
    category: 'Paving & Earthworks',
    location: 'Kempton Park, Ekurhuleni',
    image: '/src/assets/images/project_paving_clearance_1794252127689.jpg',
    scope: '1,850 m² 80mm interlocking industrial paving with heavy-duty Figure 7 concrete kerbs and dynamic roller compaction.',
    keySpecs: 'G5 subbase compacted to 95% Mod AASHTO, 80mm Class 1 pavers',
    completionTime: '14 Days',
    clientType: 'Freight Transport Depot',
  },
  {
    id: 'proj-6',
    title: 'Engineered Raft Foundation & Ground Beams',
    category: 'Concrete Slabs',
    location: 'Fourways, Johannesburg',
    image: '/src/assets/images/hero_civil_construction_1794252110452.jpg',
    scope: 'Deep ground beam excavation, laser-leveled concrete blindings, structural steel cage cages, and monolithic concrete pour.',
    keySpecs: 'Y12/Y20 rebar cages, slump 100mm, 28-day cube strength tested',
    completionTime: '9 Days',
    clientType: 'Commercial Showroom',
  },
];
