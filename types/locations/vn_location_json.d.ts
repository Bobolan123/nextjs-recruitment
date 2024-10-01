export interface ICity {
    name: string;
    slug: string;
    type: string;
    name_with_type: string;
    code: string;
}

export interface IDistrict {
    name: string; // Name of the location (e.g., Thanh Oai)
    type: string; // Type of the location (e.g., huyen)
    slug: string; // URL-friendly version of the name (e.g., thanh-oai)
    name_with_type: string; // Full name with type included (e.g., Huyện Thanh Oai)
    path: string; // Path with the location and parent (e.g., Thanh Oai, Hà Nội)
    path_with_type: string; // Full path with type and parent type (e.g., Huyện Thanh Oai, Thành phố Hà Nội)
    code: string; // Unique code for the location (e.g., 278)
    parent_code: string; // Code of the parent location (e.g., 01 for Hà Nội)
}

export interface ISubDistrict extends IDistrict {}
