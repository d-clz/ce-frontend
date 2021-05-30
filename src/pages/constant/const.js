export const Profile = {
  marina_orsini_jones: {
    full_name: "mo_jones_fname",
    name: "mo_jones_name",
    image: "/img/marina_orsini_jones.jpg",
    short_description: "mo_jones_sd",
    company: "mo_jones_com",
    role: "mo_jones_role",
    description: "mo_jones_d",
  },
  thuy_thi_ngoc_bui: {
    full_name: "thuy_bui_fname",
    name: "thuy_bui_name",
    image: "/img/thuy_thi_ngoc_bui.jpg",
    company: "thuy_bui_com",
    short_description: "thuy_bui_sd",
    role: "thuy_bui_role",
    description: "thuy_bui_d",
  },
  nguyen_thi_thom_thom: {
    full_name: "thom_nguyen_fname",
    name: "thom_nguyen_name",
    image: "/img/nguyen_thi_thom_thom.jpg",
    short_description: "thom_nguyen_sd",
    company: "thom_nguyen_com",
    role: "thom_nguyen_role",
    description: "thom_nguyen_d",
  },
  zoe_gazeley_eke: {
    full_name: "zoe_eke_fname",
    name: "zoe_eke_name",
    image: "/img/zoe_gazeley_eke.jpg",
    company: "zoe_eke_com",
    short_description: "zoe_eke_sd",
    role: "zoe_eke_role",
    description: "zoe_eke_d",
  },
  jenny_wells: {
    full_name: "jenny_wells_fname",
    name: "jenny_wells_name",
    image: "img/jenny_wells.jpg",
    company: "jenny_wells_com",
    role: "jenny_wells_role",
    short_description: "jenny_wells_sd",
    description: "jenny_wells_d",
  },
  farida_butt: {
    full_name: "farida_butt_fname",
    name: "farida_butt_name",
    image: "/img/farida_butt.jpg",
    short_description: "farida_butt_sd",
    company: "farida_butt_com",
    role: "farida_butt_role",
    description: "farida_butt_d",
  },
  minh_tuan_phi: {
    full_name: "tuan_phi_fname",
    name: "tuan_phi_name",
    image: "/img/minh_tuan_phi.jpg",
    short_description: "tuan_phi_sd",
    company: "tuan_phi_com",
    role: "tuan_phi_role",
    description: "tuan_phi_d",
  },
  kate_borthwick: {
    full_name: "borthwick_fname",
    name: "borthwick_name",
    image: "/img/kate_borthwick.jpg",
    short_description: "borthwick_sd",
    company: "borthwick_com",
    role: "borthwick_role",
    description: "borthwick_d",
  },
  trinh_viet_dung: {
    full_name: 'trinh_dung_fname',
    name: "trinh_dung_name",
    image: "/img/trinh_viet_dung.jpg",
    company: "trinh_dung_com",
    short_description: "trinh_dung_sd",
    role: "trinh_dung_role",
    description: `trinh_dung_d`,
  },
  nguyen_minh_hoang: {
    full_name: 'nguyen_hoang_fname',
    name: "nguyen_hoang_name",
    image: "/img/nguyen_minh_hoang.png",
    company: "nguyen_hoang_com",
    short_description: "nguyen_hoang_sd",
    role: "nguyen_hoang_role",
    description: "nguyen_hoang_d",
  },
};

export const buildQueryString = (params) => {
  const query = [];

  Object.entries(params).map((param) => {
    let [key, value] = param;
    query.push(`${key}=${encodeURIComponent(value)}`);
  });

  return query.join("&");
};
