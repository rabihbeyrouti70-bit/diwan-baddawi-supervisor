    /* ============================================================
       DATA & CONSTANTS
       ============================================================ */
    const DEFAULT_SECTIONS_DATA = [
  {
    "id": "sec_1",
    "num": 1,
    "titleEn": "1. Parking",
    "titleAr": "منطقة الموقف",
    "itemCount": 1,
    "items": [
      {
        "rawId": "Parking - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      }
    ],
    "temps": [],
    "note": "Parking"
  },
  {
    "id": "sec_2",
    "num": 2,
    "titleEn": "2. Entrance",
    "titleAr": "المدخل",
    "itemCount": 1,
    "items": [
      {
        "rawId": "Entrance - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      }
    ],
    "temps": [],
    "note": "Entrance"
  },
  {
    "id": "sec_3",
    "num": 3,
    "titleEn": "3. Customer Trolleys",
    "titleAr": "عربات العملاء",
    "itemCount": 1,
    "items": [
      {
        "rawId": "Customer Trolleys - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      }
    ],
    "temps": [],
    "note": "Customer Trolleys"
  },
  {
    "id": "sec_4",
    "num": 4,
    "titleEn": "4. Cash POS",
    "titleAr": "الكاشير",
    "itemCount": 3,
    "items": [
      {
        "rawId": "Cash POS - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Cash POS - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "Cash POS - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      }
    ],
    "temps": [],
    "note": "Cash POS"
  },
  {
    "id": "sec_5",
    "num": 5,
    "titleEn": "5. La-Farina",
    "titleAr": "المخبز",
    "itemCount": 10,
    "items": [
      {
        "rawId": "La-Farina - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "La-Farina - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "La-Farina - Hair Net / غطاء الرأس",
        "en": "Hair Net",
        "ar": "غطاء الرأس"
      },
      {
        "rawId": "La-Farina - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      },
      {
        "rawId": "La-Farina - Shelf Sorting / ترتيب الرفوف",
        "en": "Shelf Sorting",
        "ar": "ترتيب الرفوف"
      },
      {
        "rawId": "La-Farina - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "La-Farina - Refrigerator Cleanliness / نظافة الثلاجة",
        "en": "Refrigerator Cleanliness",
        "ar": "نظافة الثلاجة"
      },
      {
        "rawId": "La-Farina - Refrigerator 1 Temperature / حرارة الثلاجة 1",
        "en": "Refrigerator 1 Temperature",
        "ar": "حرارة الثلاجة 1"
      },
      {
        "rawId": "La-Farina - Refrigerator 2 Temperature / حرارة الثلاجة 2",
        "en": "Refrigerator 2 Temperature",
        "ar": "حرارة الثلاجة 2"
      },
      {
        "rawId": "La-Farina - Refrigerator 3 Temperature / حرارة الثلاجة 3",
        "en": "Refrigerator 3 Temperature",
        "ar": "حرارة الثلاجة 3"
      }
    ],
    "temps": [
      "La-Farina Refrigerator 1",
      "La-Farina Refrigerator 2",
      "La-Farina Refrigerator 3"
    ],
    "note": "La-Farina"
  },
  {
    "id": "sec_6",
    "num": 6,
    "titleEn": "6. Dairy",
    "titleAr": "قسم الألبان",
    "itemCount": 11,
    "items": [
      {
        "rawId": "Dairy - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Dairy - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "Dairy - Hair Net / غطاء الرأس",
        "en": "Hair Net",
        "ar": "غطاء الرأس"
      },
      {
        "rawId": "Dairy - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      },
      {
        "rawId": "Dairy - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "Dairy - Grater Machine / مكنة برش الأجبان",
        "en": "Grater Machine",
        "ar": "مكنة برش الأجبان"
      },
      {
        "rawId": "Dairy - Slicer Machine / مكنة تقطيع اللحوم والأجبان",
        "en": "Slicer Machine",
        "ar": "مكنة تقطيع اللحوم والأجبان"
      },
      {
        "rawId": "Dairy - Packing Machine / مكنة التغليف",
        "en": "Packing Machine",
        "ar": "مكنة التغليف"
      },
      {
        "rawId": "Dairy - Refrigerator Cleanliness / نظافة الثلاجة",
        "en": "Refrigerator Cleanliness",
        "ar": "نظافة الثلاجة"
      },
      {
        "rawId": "Dairy - Refrigerator 1 Temperature / حرارة الثلاجة 1",
        "en": "Refrigerator 1 Temperature",
        "ar": "حرارة الثلاجة 1"
      },
      {
        "rawId": "Dairy - Refrigerator 2 Temperature / حرارة الثلاجة 2",
        "en": "Refrigerator 2 Temperature",
        "ar": "حرارة الثلاجة 2"
      }
    ],
    "temps": [
      "Dairy Refrigerator 1",
      "Dairy Refrigerator 2"
    ],
    "note": "Dairy"
  },
  {
    "id": "sec_7",
    "num": 7,
    "titleEn": "7. Butcher",
    "titleAr": "قسم اللحوم",
    "itemCount": 10,
    "items": [
      {
        "rawId": "Butcher - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Butcher - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "Butcher - Hair Net Check / غطاء الرأس",
        "en": "Hair Net Check",
        "ar": "غطاء الرأس"
      },
      {
        "rawId": "Butcher - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      },
      {
        "rawId": "Butcher - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "Butcher - Meat Grinder Machine / مكنة فرم اللحوم",
        "en": "Meat Grinder Machine",
        "ar": "مكنة فرم اللحوم"
      },
      {
        "rawId": "Butcher - Packing Machine / مكنة التغليف",
        "en": "Packing Machine",
        "ar": "مكنة التغليف"
      },
      {
        "rawId": "Butcher - Refrigerator Cleanliness / نظافة الثلاجة",
        "en": "Refrigerator Cleanliness",
        "ar": "نظافة الثلاجة"
      },
      {
        "rawId": "Butcher - Refrigerator 1 Temperature / حرارة الثلاجة 1",
        "en": "Refrigerator 1 Temperature",
        "ar": "حرارة الثلاجة 1"
      },
      {
        "rawId": "Butcher - Refrigerator 2 Temperature / حرارة الثلاجة 2",
        "en": "Refrigerator 2 Temperature",
        "ar": "حرارة الثلاجة 2"
      }
    ],
    "temps": [
      "Butcher Refrigerator 1",
      "Butcher Refrigerator 2"
    ],
    "note": "Butcher"
  },
  {
    "id": "sec_8",
    "num": 8,
    "titleEn": "8. Poultry",
    "titleAr": "قسم الدواجن",
    "itemCount": 10,
    "items": [
      {
        "rawId": "Poultry - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Poultry - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "Poultry - Hair Net Check / غطاء الرأس",
        "en": "Hair Net Check",
        "ar": "غطاء الرأس"
      },
      {
        "rawId": "Poultry - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      },
      {
        "rawId": "Poultry - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "Poultry - Meat Grinder Machine / مكنة فرم اللحوم",
        "en": "Meat Grinder Machine",
        "ar": "مكنة فرم اللحوم"
      },
      {
        "rawId": "Poultry - Vacuum Packing Machine / مكنة التغليف الفاكيوم",
        "en": "Vacuum Packing Machine",
        "ar": "مكنة التغليف الفاكيوم"
      },
      {
        "rawId": "Poultry - Refrigerator Cleanliness / نظافة الثلاجة",
        "en": "Refrigerator Cleanliness",
        "ar": "نظافة الثلاجة"
      },
      {
        "rawId": "Poultry - Refrigerator 1 Temperature / حرارة الثلاجة 1",
        "en": "Refrigerator 1 Temperature",
        "ar": "حرارة الثلاجة 1"
      },
      {
        "rawId": "Poultry - Refrigerator 2 Temperature / حرارة الثلاجة 2",
        "en": "Refrigerator 2 Temperature",
        "ar": "حرارة الثلاجة 2"
      }
    ],
    "temps": [
      "Poultry Refrigerator 1",
      "Poultry Refrigerator 2"
    ],
    "note": "Poultry"
  },
  {
    "id": "sec_9",
    "num": 9,
    "titleEn": "9. Showroom",
    "titleAr": "صالة العرض",
    "itemCount": 7,
    "items": [
      {
        "rawId": "Showroom - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Showroom - Staff Uniform / زي الموظفين",
        "en": "Staff Uniform",
        "ar": "زي الموظفين"
      },
      {
        "rawId": "Showroom - Tag Name / بطاقة الاسم",
        "en": "Tag Name",
        "ar": "بطاقة الاسم"
      },
      {
        "rawId": "Showroom - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "Showroom - Product Arrangement / ترتيب المنتجات",
        "en": "Product Arrangement",
        "ar": "ترتيب المنتجات"
      },
      {
        "rawId": "Showroom - FIFO Standards / تطبيق الأقدم فالأحدث",
        "en": "FIFO Standards",
        "ar": "تطبيق الأقدم فالأحدث"
      },
      {
        "rawId": "Showroom - Shelf Facing & Cleanliness / واجهة ونظافة الرفوف",
        "en": "Shelf Facing & Cleanliness",
        "ar": "واجهة ونظافة الرفوف"
      }
    ],
    "temps": [],
    "note": "Showroom"
  },
  {
    "id": "sec_10",
    "num": 10,
    "titleEn": "10. Daily Store",
    "titleAr": "المخزن اليومي",
    "itemCount": 5,
    "items": [
      {
        "rawId": "Daily Store - Cleanliness / النظافة",
        "en": "Cleanliness",
        "ar": "النظافة"
      },
      {
        "rawId": "Daily Store - Expiry Date / تاريخ الانتهاء",
        "en": "Expiry Date",
        "ar": "تاريخ الانتهاء"
      },
      {
        "rawId": "Daily Store - Product Arrangement / ترتيب المنتجات",
        "en": "Product Arrangement",
        "ar": "ترتيب المنتجات"
      },
      {
        "rawId": "Daily Store - FIFO Standards / تطبيق الأقدم فالأحدث",
        "en": "FIFO Standards",
        "ar": "تطبيق الأقدم فالأحدث"
      },
      {
        "rawId": "Daily Store - Shelf Facing & Cleanliness / واجهة ونظافة الرفوف",
        "en": "Shelf Facing & Cleanliness",
        "ar": "واجهة ونظافة الرفوف"
      }
    ],
    "temps": [],
    "note": "Daily Store"
  }
];
    const TEMP_CONFIGS = {
  "La-Farina Refrigerator 1": {
    "min": 1,
    "max": 5,
    "target": "1°C - 5°C",
    "ar": "حرارة ثلاجة لافارينا 1"
  },
  "La-Farina Refrigerator 2": {
    "min": 1,
    "max": 5,
    "target": "1°C - 5°C",
    "ar": "حرارة ثلاجة لافارينا 2"
  },
  "La-Farina Refrigerator 3": {
    "min": 1,
    "max": 5,
    "target": "1°C - 5°C",
    "ar": "حرارة ثلاجة لافارينا 3"
  },
  "Dairy Refrigerator 1": {
    "min": 0,
    "max": 4,
    "target": "0°C - 4°C",
    "ar": "حرارة ثلاجة الألبان 1"
  },
  "Dairy Refrigerator 2": {
    "min": 0,
    "max": 4,
    "target": "0°C - 4°C",
    "ar": "حرارة ثلاجة الألبان 2"
  },
  "Butcher Refrigerator 1": {
    "min": -1,
    "max": 3,
    "target": "-1°C - 3°C",
    "ar": "حرارة ثلاجة اللحوم 1"
  },
  "Butcher Refrigerator 2": {
    "min": -1,
    "max": 3,
    "target": "-1°C - 3°C",
    "ar": "حرارة ثلاجة اللحوم 2"
  },
  "Poultry Refrigerator 1": {
    "min": -1,
    "max": 3,
    "target": "-1°C - 3°C",
    "ar": "حرارة ثلاجة الدواجن 1"
  },
  "Poultry Refrigerator 2": {
    "min": -1,
    "max": 3,
    "target": "-1°C - 3°C",
    "ar": "حرارة ثلاجة الدواجن 2"
  }
};

    // Legacy SUPERVISORS array removed (replaced by DEFAULT_SUPERVISORS)

    const SHIFT_NAMES = {
      morning: "وردية صباحية",
      evening: "وردية مسائية",
      night: "وردية ليلية"
    };

    /* ============================================================
       APPLICATION CONFIGURATION & CONSTANTS (AUDIT HARDENING)
       ============================================================ */
    const APP_CONFIG = {
      PIN_LENGTH: 4,
      MAX_ATTEMPTS: 5,
      LOCKOUT_DURATION: 30, // seconds
      TOAST_DURATION: 3000, // ms
      ARCHIVE_LIMIT: 30
    };

    const STORAGE_KEYS = {
      BRANCHES: 'diwan_branches_data',
      BRANCH_SHIFTS: 'diwan_branch_shifts',
      BRANCH_SECTIONS: 'diwan_branch_sections',
      SUPERVISORS: 'diwan_supervisors_data',
      FIREBASE_CONFIG: 'diwan_firebase_config',
      SHIFT_PREFIX: 'diwan_shift_',
      ARCHIVE_PREFIX: 'diwan_archive_shifts_'
    };

    /* ============================================================
       DYNAMIC MULTI-BRANCH TASKS & SECTIONS ENGINE (V4.5)
       ============================================================ */
    const POPULAR_SECTION_TEMPLATES = [
      {
        id: 'sec_fruits_veg',
        titleAr: 'قسم الخضار والفواكه',
        titleEn: 'Fruits & Vegetables',
        icon: '🥦',
        items: [
          { rawId: 'Fruits & Veg - Cleanliness / النظافة', ar: 'النظافة العامة وطاولات العرض', en: 'Cleanliness & Tables' },
          { rawId: 'Fruits & Veg - Sorting & Freshness / الفرز والطزاجة', ar: 'الفرز والجودة وفحص التالف', en: 'Sorting & Quality Check' },
          { rawId: 'Fruits & Veg - FIFO & Display / العرض وتدوير البضاعة', ar: 'تطبيق FIFO وتدوير البضاعة', en: 'FIFO & Product Rotation' },
          { rawId: 'Fruits & Veg - Price Tags & Scale / الأسعار والميزان', ar: 'وضوح بطاقات الأسعار ونظافة الميزان', en: 'Price Tags & Scales' }
        ],
        temps: [],
        note: 'قسم الخضار والفواكه'
      },
      {
        id: 'sec_roastery',
        titleAr: 'قسم المحمصة والبهارات',
        titleEn: 'Roastery & Spices',
        icon: '🥜',
        items: [
          { rawId: 'Roastery - Cleanliness / النظافة', ar: 'نظافة المحمصة والمطاحن والواجهة', en: 'Cleanliness & Roaster' },
          { rawId: 'Roastery - Packing & Sealing / التعبئة والتغليف', ar: 'تغليف وإحكام إغلاق الأكياس', en: 'Packing & Sealing' },
          { rawId: 'Roastery - Expiry Dates / تواريخ الصلاحية', ar: 'مراقبة تواريخ الإنتاج والصلاحية', en: 'Expiry Dates' },
          { rawId: 'Roastery - Price Tags / بطاقات الأسعار', ar: 'وضوح الأسعار على العبوات والمكسرات', en: 'Price Tags' }
        ],
        temps: [],
        note: 'قسم المحمصة'
      },
      {
        id: 'sec_seafood',
        titleAr: 'قسم الأسماك والبحريات',
        titleEn: 'Fish & Seafood',
        icon: '🐟',
        items: [
          { rawId: 'Seafood - Cleanliness & Odor / النظافة والرائحة', ar: 'النظافة والتعقيم اليومي والرائحة', en: 'Cleanliness & Odor' },
          { rawId: 'Seafood - Ice Layer & Freshness / الثلج والطزاجة', ar: 'تجديد الثلج وفحص طزاجة الأسماك', en: 'Ice Layer & Freshness' },
          { rawId: 'Seafood - Tools Sterilization / تعقيم الأدوات', ar: 'تعقيم ألواح التقطيع والسكاكين', en: 'Tools Sterilization' },
          { rawId: 'Seafood - Fridge Cleanliness / نظافة البراد', ar: 'نظافة براد حفظ الأسماك المركزي', en: 'Fish Fridge Cleanliness' }
        ],
        temps: [
          { rawId: 'Fish Refrigerator 1 Temperature / حرارة براد الأسماك 1', label: 'حرارة براد الأسماك 1', min: 0, max: 4 }
        ],
        note: 'قسم الأسماك'
      },
      {
        id: 'sec_facility',
        titleAr: 'قسم النظافة والمرافق العامة',
        titleEn: 'Hygiene & Facilities',
        icon: '🧹',
        items: [
          { rawId: 'Facility - Aisles Cleanliness / نظافة الممرات', ar: 'نظافة ممرات الصالة والواجهات الزجاجية', en: 'Aisles & Glass Cleanliness' },
          { rawId: 'Facility - Restrooms Disinfection / تعقيم الحمامات', ar: 'نظافة وتعقيم دورات المياه والمغاسل', en: 'Restrooms Disinfection' },
          { rawId: 'Facility - Trash Bins / سلال المهملات', ar: 'تفريغ سلال المهملات وتبديل الأكياس', en: 'Emptying Trash Bins' },
          { rawId: 'Facility - Sanitizers Available / توفر المعقمات', ar: 'توفر المعقمات والمحارم للزبائن', en: 'Sanitizers & Tissues' }
        ],
        temps: [],
        note: 'قسم المرافق'
      },
      {
        id: 'sec_warehouse_ext',
        titleAr: 'قسم المستودع الخارجي ومنطقة التنزيل',
        titleEn: 'External Warehouse',
        icon: '📦',
        items: [
          { rawId: 'Ext Warehouse - Cleanliness / نظافة التنزيل', ar: 'نظافة منطقة التفريغ والتنزيل', en: 'Unloading Area Cleanliness' },
          { rawId: 'Ext Warehouse - Pallets & Aisles / تنظيم الطبالي', ar: 'ترتيب الطبالي وتنظيم ممرات الطوارئ', en: 'Pallets & Emergency Aisles' },
          { rawId: 'Ext Warehouse - Cold Rooms / غرف التبريد', ar: 'فحص درجات حرارة غرف التبريد الخارجية', en: 'External Cold Rooms' },
          { rawId: 'Ext Warehouse - Security & Doors / إغلاق الأبواب', ar: 'إحكام إغلاق الأبواب وأمان المستودع', en: 'Doors Security' }
        ],
        temps: [],
        note: 'المستودع الخارجي'
      }
    ];

    let memoryBranchSectionsCache = null;

    function getAllBranchSections() {
      if (memoryBranchSectionsCache && typeof memoryBranchSectionsCache === 'object') {
        return memoryBranchSectionsCache;
      }
      const saved = safeGetItem(STORAGE_KEYS.BRANCH_SECTIONS);
      if (saved) {
        const parsed = safeJsonParse(saved);
        if (parsed && typeof parsed === 'object') {
          memoryBranchSectionsCache = parsed;
          return parsed;
        }
      }
      return {};
    }

    function getBranchSections(branchId, includeDisabled = false) {
      const bId = branchId || currentBranchId;
      const all = getAllBranchSections();
      let sections = (all && all[bId] && Array.isArray(all[bId])) ? all[bId] : DEFAULT_SECTIONS_DATA;
      if (!Array.isArray(sections) || sections.length === 0) {
        sections = DEFAULT_SECTIONS_DATA;
      }
      if (!includeDisabled) {
        return sections.filter(sec => !sec.disabled);
      }
      return sections;
    }

    // Dynamic backward compatibility for global SECTIONS_DATA & TOTAL_ITEMS
    Object.defineProperty(window, 'SECTIONS_DATA', {
      get: function() {
        return getBranchSections(currentBranchId, false);
      },
      configurable: true
    });

    function getBranchTotalItems(branchId) {
      const sections = getBranchSections(branchId || currentBranchId, false);
      return sections.reduce((acc, sec) => acc + (sec.items ? sec.items.length : 0), 0);
    }

    Object.defineProperty(window, 'TOTAL_ITEMS', {
      get: function() {
        return getBranchTotalItems(currentBranchId);
      },
      configurable: true
    });

    function saveBranchSections(branchId, sectionsList, broadcast = true) {
      const bId = branchId || currentBranchId;
      const all = getAllBranchSections();
      all[bId] = sectionsList;
      memoryBranchSectionsCache = all;
      safeSetItem(STORAGE_KEYS.BRANCH_SECTIONS, JSON.stringify(all));

      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_BRANCH_SECTIONS',
          branchId: bId,
          sections: sectionsList
        });
      }
      if (firebaseDb) {
        firebaseDb.ref('config/branch_sections/' + bId).set(sectionsList).catch(err => {
          console.warn('Firebase branch sections write error:', err);
        });
      }

      if (bId === currentBranchId) {
        renderAll();
      }
    }

    function listenToFirebaseBranchSections() {
      if (!firebaseDb) return;
      firebaseDb.ref('config/branch_sections').on('value', (snapshot) => {
        const val = snapshot.val();
        if (val && typeof val === 'object') {
          memoryBranchSectionsCache = val;
          safeSetItem(STORAGE_KEYS.BRANCH_SECTIONS, JSON.stringify(val));
          if (document.body.classList.contains('auth-passed')) {
            renderAll();
          }
          const modal = document.getElementById('branchTasksModal');
          if (modal && modal.classList.contains('open')) {
            renderBranchSectionsList();
          }
        }
      }, (err) => console.warn('Firebase branch sections listener error:', err));
    }


    /* ============================================================
       SECURITY & RESILIENCE UTILITIES (XSS & STORAGE PROTECTION)
       ============================================================ */
    function escapeHtml(str) {
      if (str == null) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function safeGetItem(key, defaultValue = null) {
      try {
        const val = localStorage.getItem(key);
        return val !== null ? val : defaultValue;
      } catch (e) {
        console.warn('localStorage getItem failed for key:', key, e);
        return defaultValue;
      }
    }

    function safeSetItem(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        console.error('localStorage setItem failed for key:', key, e);
        return false;
      }
    }

    function safeJsonParse(jsonStr, defaultValue = null) {
      if (!jsonStr) return defaultValue;
      try {
        return JSON.parse(jsonStr);
      } catch (e) {
        console.error('safeJsonParse failed:', e);
        return defaultValue;
      }
    }

    // Centralized Stats Calculation (V4.0 Multi-Shift Matrix Support)
    
    /* ============================================================
       BRANCH TASKS & SECTIONS UI CONTROLLER & PERMISSIONS (V4.5)
       ============================================================ */
    function openBranchTasksModal() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة ومديري الفروع فقط.");
        return;
      }
      populateBranchTasksBranchFilter();
      cancelCustomSectionForm();
      renderBranchSectionsList();
      document.getElementById('branchTasksModal').classList.add('open');
      document.body.classList.add('modal-open');
    }

    function closeBranchTasksModal() {
      document.getElementById('branchTasksModal').classList.remove('open');
      document.body.classList.remove('modal-open');
      cancelCustomSectionForm();
    }

    function populateBranchTasksBranchFilter() {
      const filter = document.getElementById('branchTasksBranchFilter');
      if (!filter) return;
      const branches = getBranchesList();

      if (currentUserRole === 'branch_manager') {
        const b = getBranchById(currentBranchId);
        filter.innerHTML = `<option value="${escapeHtml(currentBranchId)}" selected>🏢 ${escapeHtml(b ? b.nameAr : currentBranchId)} (فرعك فقط)</option>`;
        filter.disabled = true;
      } else {
        filter.disabled = false;
        filter.innerHTML = branches.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.nameAr)} (${escapeHtml(b.location)})</option>`).join('');
        filter.value = currentBranchId;
      }
    }

    function onBranchTasksFilterChange() {
      cancelCustomSectionForm();
      renderBranchSectionsList();
    }

    function getSelectedBranchForTasks() {
      const filter = document.getElementById('branchTasksBranchFilter');
      if (!filter || currentUserRole === 'branch_manager') {
        return currentBranchId;
      }
      return filter.value || currentBranchId;
    }

    function renderBranchSectionsList() {
      const branchId = getSelectedBranchForTasks();
      const b = getBranchById(branchId);
      const sections = getBranchSections(branchId, true);
      const container = document.getElementById('branchSectionsListContainer');
      const statsBar = document.getElementById('branchTasksStatsBar');
      if (!container) return;

      const activeSections = sections.filter(s => !s.disabled);
      const disabledSections = sections.filter(s => s.disabled);
      const totalItems = activeSections.reduce((acc, s) => acc + (s.items ? s.items.length : 0), 0);

      if (statsBar) {
        statsBar.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="color: #166534; font-size: 13.5px;">🏢 ${escapeHtml(b ? b.nameAr : branchId)}:</strong>
            <span style="background: #dcfce7; color: #166534; font-weight: 800; font-size: 11.5px; padding: 2px 8px; border-radius: 999px; border: 1px solid #bbf7d0;">
              ${activeSections.length} مهام مفعلة
            </span>
            ${disabledSections.length > 0 ? `<span style="background: #f1f5f9; color: #64748b; font-weight: 700; font-size: 11px; padding: 2px 7px; border-radius: 999px; border: 1px solid #cbd5e1;">${disabledSections.length} معطلة</span>` : ''}
          </div>
          <div style="font-size: 12px; color: #166534; font-weight: 700;">
            📝 إجمالي بنود التفتيش الحالية: <strong>${totalItems}</strong> بنداً
          </div>
        `;
      }

      if (sections.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">لا توجد مهام معرفة لهذا الفرع. أضف مهمة جديدة أو استعد الأقسام الافتراضية.</div>';
        return;
      }

      container.innerHTML = sections.map((sec, idx) => {
        const isEnabled = !sec.disabled;
        const itemCount = sec.items ? sec.items.length : 0;
        const tempCount = sec.temps ? sec.temps.length : 0;
        const icon = sec.icon || (idx === 0 ? '🚗' : idx === 1 ? '🚪' : idx === 2 ? '🛒' : idx === 3 ? '💳' : idx === 4 ? '🥖' : idx === 5 ? '🧀' : idx === 6 ? '🥩' : idx === 7 ? '🍗' : idx === 8 ? '🏢' : idx === 9 ? '📦' : '📋');
        const isCustom = !!sec.isCustom || String(sec.id).startsWith('sec_custom_') || String(sec.id).startsWith('sec_fruits_') || String(sec.id).startsWith('sec_roastery') || String(sec.id).startsWith('sec_seafood') || String(sec.id).startsWith('sec_facility') || String(sec.id).startsWith('sec_warehouse_');

        return `
          <div style="background: ${isEnabled ? '#ffffff' : '#f8fafc'}; border: 1.5px solid ${isEnabled ? '#cbd5e1' : '#e2e8f0'}; border-radius: 10px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; box-shadow: ${isEnabled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'}; opacity: ${isEnabled ? '1' : '0.75'};">
            <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 240px;">
              <span style="font-size: 20px; width: 34px; height: 34px; background: ${isEnabled ? '#ecfdf5' : '#e2e8f0'}; border-radius: 8px; display: flex; align-items: center; justify-content: center;">${icon}</span>
              <div>
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  <strong style="font-size: 13.5px; color: ${isEnabled ? 'var(--secondary)' : '#64748b'};">${escapeHtml(sec.titleAr || sec.titleEn || 'قسم')}</strong>
                  ${sec.titleEn ? `<small style="font-size: 10.5px; color: var(--text-muted);">(${escapeHtml(sec.titleEn)})</small>` : ''}
                  ${isCustom ? '<span style="background: #eff6ff; color: #1d4ed8; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 4px; border: 1px solid #bfdbfe;">مخصص للفرع</span>' : ''}
                </div>
                <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 3px;">
                  📋 ${itemCount} بنود تفتيش ${tempCount > 0 ? `• ❄️ ${tempCount} برادات` : ''}
                  • الحالة: ${isEnabled ? '<span style="color: #059669; font-weight: 700;">مفعل للفرع 🟢</span>' : '<span style="color: #dc2626; font-weight: 700;">معطل ⚪</span>'}
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 10px; font-size: 11.5px; color: ${isEnabled ? '#d97706' : '#059669'}; border-color: ${isEnabled ? '#fde68a' : '#a7f3d0'};" onclick="toggleBranchSection('${escapeHtml(branchId)}', '${escapeHtml(sec.id)}')">
                ${isEnabled ? 'تعطيل للفرع ⏸️' : 'تفعيل للفرع ▶️'}
              </button>
              <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 10px; font-size: 11.5px;" onclick="openEditCustomSectionForm('${escapeHtml(branchId)}', '${escapeHtml(sec.id)}')">
                ✏️ تعديل
              </button>
              ${isCustom ? `
                <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 10px; font-size: 11.5px; color: #dc2626; border-color: #fca5a5;" onclick="deleteBranchSection('${escapeHtml(branchId)}', '${escapeHtml(sec.id)}')">
                  🗑️ حذف
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    function toggleBranchSection(branchId, secId) {
      const sections = JSON.parse(JSON.stringify(getBranchSections(branchId, true)));
      const sec = sections.find(s => s.id === secId);
      if (!sec) return;

      sec.disabled = !sec.disabled;
      saveBranchSections(branchId, sections);
      renderBranchSectionsList();
      const b = getBranchById(branchId);
      const bName = b ? b.nameAr : branchId;
      showToast(`${sec.disabled ? '⚪ تم تعطيل' : '🟢 تم تفعيل'} قسم "${sec.titleAr}" لـ (${bName})`);
    }

    function quickAddTemplateSection(templateId) {
      const branchId = getSelectedBranchForTasks();
      const tmpl = POPULAR_SECTION_TEMPLATES.find(t => t.id === templateId);
      if (!tmpl) return;

      const sections = JSON.parse(JSON.stringify(getBranchSections(branchId, true)));
      // Check if already exists in this branch
      const existing = sections.find(s => s.id === tmpl.id || s.titleAr === tmpl.titleAr);
      if (existing) {
        if (existing.disabled) {
          existing.disabled = false;
          saveBranchSections(branchId, sections);
          renderBranchSectionsList();
          showToast(`🟢 تم إعادة تفعيل قسم "${tmpl.titleAr}" للفرع!`);
          return;
        } else {
          alert(`قسم "${tmpl.titleAr}" موجود ومفعل بالفعل في هذا الفرع!`);
          return;
        }
      }

      // Add fresh copy
      const newSec = JSON.parse(JSON.stringify(tmpl));
      newSec.num = sections.length + 1;
      newSec.disabled = false;
      newSec.isCustom = true;
      sections.push(newSec);

      saveBranchSections(branchId, sections);
      renderBranchSectionsList();
      const b = getBranchById(branchId);
      showToast(`✅ تمت إضافة "${tmpl.titleAr}" لـ (${b ? b.nameAr : branchId}) بنجاح!`);
    }

    function showAddCustomSectionForm() {
      document.getElementById('customSectionFormTitle').innerText = '➕ إضافة مهمة / قسم جديد لهذا الفرع';
      document.getElementById('editCustomSectionId').value = '';
      document.getElementById('inputCustomSectionNameAr').value = '';
      document.getElementById('inputCustomSectionIcon').value = '📋';
      document.getElementById('inputCustomSectionItems').value = 'النظافة العامة وطاولات العرض\nالفرز والجودة وفحص التالف\nوضوح بطاقات الأسعار';
      document.getElementById('inputCustomSectionHasTemps').checked = false;
      document.getElementById('customSectionTempCountWrapper').style.display = 'none';
      document.getElementById('inputCustomSectionTempCount').value = '1';
      document.getElementById('customSectionFormError').innerText = '';
      document.getElementById('customSectionFormContainer').style.display = 'block';
      document.getElementById('customSectionFormContainer').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function openEditCustomSectionForm(branchId, secId) {
      const sections = getBranchSections(branchId, true);
      const sec = sections.find(s => s.id === secId);
      if (!sec) return;

      document.getElementById('customSectionFormTitle').innerText = `✏️ تعديل قسم: ${sec.titleAr}`;
      document.getElementById('editCustomSectionId').value = sec.id;
      document.getElementById('inputCustomSectionNameAr').value = sec.titleAr || '';
      document.getElementById('inputCustomSectionIcon').value = sec.icon || '📋';
      
      const itemsText = (sec.items || []).map(i => i.ar || i.en).join('\n');
      document.getElementById('inputCustomSectionItems').value = itemsText;

      const hasTemps = sec.temps && sec.temps.length > 0;
      document.getElementById('inputCustomSectionHasTemps').checked = hasTemps;
      document.getElementById('customSectionTempCountWrapper').style.display = hasTemps ? 'block' : 'none';
      document.getElementById('inputCustomSectionTempCount').value = hasTemps ? sec.temps.length : 1;

      document.getElementById('customSectionFormError').innerText = '';
      document.getElementById('customSectionFormContainer').style.display = 'block';
      document.getElementById('customSectionFormContainer').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function toggleCustomSectionTempCount(checked) {
      const wrapper = document.getElementById('customSectionTempCountWrapper');
      if (wrapper) wrapper.style.display = checked ? 'block' : 'none';
    }

    function cancelCustomSectionForm() {
      const c = document.getElementById('customSectionFormContainer');
      if (c) c.style.display = 'none';
    }

    function saveCustomSectionForm() {
      const branchId = getSelectedBranchForTasks();
      const editId = document.getElementById('editCustomSectionId').value.trim();
      const nameAr = document.getElementById('inputCustomSectionNameAr').value.trim();
      const icon = document.getElementById('inputCustomSectionIcon').value.trim() || '📋';
      const itemsRaw = document.getElementById('inputCustomSectionItems').value.trim();
      const hasTemps = document.getElementById('inputCustomSectionHasTemps').checked;
      const tempCount = parseInt(document.getElementById('inputCustomSectionTempCount').value, 10) || 1;
      const errorBox = document.getElementById('customSectionFormError');

      if (!nameAr) {
        errorBox.innerText = 'يرجى كتابة اسم القسم أو المهمة.';
        return;
      }

      const itemLines = itemsRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (itemLines.length === 0) {
        errorBox.innerText = 'يرجى كتابة بند تفتيش واحد على الأقل.';
        return;
      }

      const sections = JSON.parse(JSON.stringify(getBranchSections(branchId, true)));
      const items = itemLines.map(line => ({
        rawId: `${nameAr} - ${line}`,
        ar: line,
        en: line
      }));

      const temps = [];
      if (hasTemps) {
        for (let i = 1; i <= Math.min(10, Math.max(1, tempCount)); i++) {
          temps.push({
            rawId: `${nameAr} - Refrigerator ${i} Temperature / حرارة الثلاجة ${i}`,
            label: `حرارة ثلاجة ${i}`,
            min: 0,
            max: 8
          });
        }
      }

      if (editId) {
        // Edit existing
        const sec = sections.find(s => s.id === editId);
        if (sec) {
          sec.titleAr = nameAr;
          sec.icon = icon;
          sec.items = items;
          sec.temps = temps;
          sec.itemCount = items.length;
        }
      } else {
        // Create new
        const newSecId = 'sec_custom_' + Date.now();
        sections.push({
          id: newSecId,
          num: sections.length + 1,
          titleAr: nameAr,
          titleEn: nameAr,
          icon: icon,
          itemCount: items.length,
          items: items,
          temps: temps,
          disabled: false,
          isCustom: true,
          note: nameAr
        });
      }

      saveBranchSections(branchId, sections);
      cancelCustomSectionForm();
      renderBranchSectionsList();
      const b = getBranchById(branchId);
      showToast(`✅ تم حفظ قسم "${nameAr}" لفرع (${b ? b.nameAr : branchId}) بنجاح!`);
    }

    function deleteBranchSection(branchId, secId) {
      const sections = getBranchSections(branchId, true);
      const sec = sections.find(s => s.id === secId);
      if (!sec) return;

      if (!confirm(`هل أنت متأكد من رغبتك في حذف قسم "${sec.titleAr}" نهائياً من هذا الفرع؟`)) {
        return;
      }

      const updated = sections.filter(s => s.id !== secId);
      saveBranchSections(branchId, updated);
      renderBranchSectionsList();
      const b = getBranchById(branchId);
      showToast(`🗑️ تم حذف قسم "${sec.titleAr}" من (${b ? b.nameAr : branchId})`);
    }

    function resetBranchSectionsToDefault() {
      const branchId = getSelectedBranchForTasks();
      const b = getBranchById(branchId);
      const bName = b ? b.nameAr : branchId;

      if (!confirm(`هل أنت متأكد من استعادة الأقسام العشرة القياسية لـ (${bName})؟\nسيتم إلغاء أي تعديلات أو مهام مخصصة أُضيفت لهذا الفرع.`)) {
        return;
      }

      const defaults = JSON.parse(JSON.stringify(DEFAULT_SECTIONS_DATA));
      saveBranchSections(branchId, defaults);
      renderBranchSectionsList();
      showToast(`🔄 تم استعادة الأقسام العشرة القياسية لـ (${bName})`);
    }

    function calculateShiftStats(shiftId, optionalItems, branchId) {
      let done = 0, inProgress = 0, critical = 0, handover = 0;
      const targetItems = optionalItems || (state && state.items) || {};
      const bId = branchId || currentBranchId;
      const sections = getBranchSections(bId, false);
      
      sections.forEach(sec => {
        if (!sec.items) return;
        sec.items.forEach(itDef => {
          const it = targetItems[itDef.rawId];
          if (!it) return;
          const shData = it[shiftId] || (typeof it.status === 'string' && (shiftId === currentShiftType) ? it : null);
          if (!shData) return;
          if (shData.status === 'done') done++;
          else if (shData.status === 'in_progress') inProgress++;
          else if (shData.status === 'critical') critical++;
          else if (shData.status === 'handover') handover++;
        });
      });
      const total = getBranchTotalItems(bId);
      const pending = Math.max(0, total - done - inProgress - critical - handover);
      const percentage = total > 0 ? Math.round((done / total) * 100) : 0;
      return { done, inProgress, critical, handover, pending, total, percentage };
    }

    function calculateStats(itemsState, targetShift) {
      const sh = targetShift || ((activeShiftView === 'all') ? currentShiftType : activeShiftView);
      if (itemsState && typeof itemsState === 'object') {
        let done = 0, inProgress = 0, handover = 0, critical = 0;
        let isMatrix = false;
        Object.values(itemsState).forEach(it => {
          if (!it) return;
          if (it.morning || it.evening || it.night) {
            isMatrix = true;
          } else {
            if (it.status === 'done') done++;
            else if (it.status === 'in_progress') inProgress++;
            else if (it.status === 'handover') handover++;
            else if (it.status === 'critical') critical++;
          }
        });
        if (isMatrix) {
          return calculateShiftStats(sh, itemsState);
        }
        const total = TOTAL_ITEMS;
        const pending = Math.max(0, total - done - inProgress - handover - critical);
        const percentage = total > 0 ? Math.round((done / total) * 100) : 0;
        return { done, inProgress, handover, critical, pending, total, percentage };
      }
      return calculateShiftStats(sh);
    }


    // Current State (V4.0 Multi-Shift Operations Matrix)
    let currentSupervisor = "علي عبد العال";
    let currentUserId = "admin";
    let currentUserRole = "admin";

    // Restore saved device identity on startup (ensures incoming calls always reach this supervisor's phone)
    try {
      const savedUid = localStorage.getItem('diwan_saved_user_id');
      if (savedUid) {
        currentUserId = savedUid;
        const savedName = localStorage.getItem('diwan_saved_user_name');
        if (savedName) currentSupervisor = savedName;
        const savedRole = localStorage.getItem('diwan_saved_user_role');
        if (savedRole) currentUserRole = savedRole;
        const savedBranch = localStorage.getItem('diwan_saved_branch_id');
        if (savedBranch) currentBranchId = savedBranch;
        console.log('📱 [Device Identity] Restored active supervisor session:', currentUserId, currentSupervisor);
      }
    } catch (e) {}
    let currentShiftType = "morning"; // Active operating shift for logging
    let activeShiftView = "all";       // View mode: 'all' (matrix comparison) or 'morning' | 'evening' | 'night'
    let currentDate = new Date().toISOString().split("T")[0];
    let activeFilter = "all";

    // Operational State: Items per shift, Temperatures per shift, Section Notes per shift
    let state = {
      items: {},          // key: rawId -> { morning: { status, updatedBy, updatedAt, note }, evening: {...}, night: {...} }
      temperatures: {},   // key: tempName -> { morning: { value, updatedBy, updatedAt }, evening: {...}, night: {...} }
      sectionNotes: {}    // key: sectionId -> { morning: string, evening: string, night: string }
    };

    // Multi-tab BroadcastChannel for zero-config live sync
    let broadcastChannel = null;
    try {
      broadcastChannel = new BroadcastChannel('diwan_market_realtime_channel');
      broadcastChannel.onmessage = (event) => {
        if (!event.data) return;
        if (event.data.type === 'SYNC_DAY_STATE' || event.data.type === 'SYNC_STATE') {
          if (event.data.branchId === currentBranchId && event.data.date === currentDate) {
            state = event.data.state;
            normalizeDayState(state);
            renderAll();
            showToast("🔄 تم استلام تحديثات العمليات اليومية من مشرف آخر");
          }
        } else if (event.data.type === 'SYNC_TEMP_RANGES') {
          if (event.data.branchId === currentBranchId) {
            safeSetItem('diwan_temp_ranges_' + currentBranchId, JSON.stringify(event.data.ranges));
            renderSections();
            showToast("🌡️ تم تحديث نطاقات درجات الحرارة");
          }
        } else if (event.data.type === 'SYNC_SUPERVISORS') {
          localStorage.setItem('diwan_supervisors_data', JSON.stringify(event.data.supervisors));
          populateAuthSupervisorSelect();
      populateSupervisorBranchSelect();
          const modal = document.getElementById('supervisorsModal');
          if (modal && modal.classList.contains('open')) {
            renderSupervisorsList();
          }
          showToast("👥 تم تحديث قائمة مسؤولي الصالة");
        }
      };
    } catch (e) {
      console.warn("BroadcastChannel not supported in this browser", e);
    }

    // Firebase state
    let firebaseDb = null;
    let firebaseRef = null;

    /* ============================================================
       INITIALIZATION
       ============================================================ */
    
    /* ============================================================
       PIN AUTHENTICATION LOGIC (تشفير SHA-256 وقفل إجباري + حماية Brute-force)
       ============================================================ */
    /* ============================================================
       MULTI-BRANCH ARCHITECTURE CONFIGURATION
       ============================================================ */
    const DEFAULT_BRANCHES = [
      { id: 'noueiery', nameAr: 'فرع النويري', nameEn: 'Noueiery Branch', location: 'بيروت - النويري' },
      { id: 'khaldeh', nameAr: 'فرع خلدة', nameEn: 'Khaldeh Branch', location: 'خلدة - الطريق العام' },
      { id: 'tariq_jdideh', nameAr: 'فرع طريق الجديدة', nameEn: 'Tariq El Jdideh Branch', location: 'بيروت - طريق الجديدة' },
      { id: 'hamra', nameAr: 'فرع الحمرا', nameEn: 'Hamra Branch', location: 'بيروت - الحمرا' },
      { id: 'baddawi', nameAr: 'فرع البداوي', nameEn: 'Baddawi Branch', location: 'الشمال - البداوي' }
    ];

    let currentBranchId = 'noueiery';

    function getBranchesList() {
      const saved = localStorage.getItem('diwan_branches_data');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (e) {}
      }
      return DEFAULT_BRANCHES;
    }

    function getBranchById(id) {
      const list = getBranchesList();
      return list.find(b => b.id === id) || list[0];
    }

    function saveBranchesList(list, broadcast = true) {
      safeSetItem(STORAGE_KEYS.BRANCHES, JSON.stringify(list));
      populateAuthBranchSelect();
      populateHeaderBranchSelect();
      populateShiftsBranchFilter();
      populateSupervisorBranchSelect();

      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_BRANCHES',
          branches: list
        });
      }
      if (firebaseDb) {
        firebaseDb.ref('config/branches').set(list).catch(err => console.warn("Firebase branches write error:", err));
      }
    }

    function populateSupervisorBranchSelect() {
      const select = document.getElementById('inputSupervisorBranch');
      const roleSelect = document.getElementById('inputSupervisorRole');
      if (!select) return;
      const branches = getBranchesList();

      if (currentUserRole === 'branch_manager') {
        // Strict lock to the manager's branch only
        const b = getBranchById(currentBranchId);
        select.innerHTML = `<option value="${escapeHtml(currentBranchId)}" selected>🏢 ${escapeHtml(b ? b.nameAr : currentBranchId)} (فرعك فقط)</option>`;
        select.disabled = true;

        if (roleSelect) {
          roleSelect.innerHTML = '<option value="supervisor" selected>👤 مسؤول صالة (Floor Supervisor)</option>';
          roleSelect.disabled = true;
        }
      } else {
        // Admin: Full flexibility
        select.disabled = false;
        const curVal = select.value;
        select.innerHTML = '<option value="all">جميع الفروع (صلاحية عامة) 🌐</option>' +
          branches.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.nameAr)}</option>`).join('');
        if (curVal && curVal !== 'all') select.value = curVal;

        if (roleSelect) {
          roleSelect.disabled = false;
          const curRole = roleSelect.value;
          roleSelect.innerHTML = `
            <option value="supervisor">👤 مسؤول صالة (Floor Supervisor)</option>
            <option value="branch_manager">🏢 مدير فرع (Branch Manager)</option>
          `;
          if (curRole) roleSelect.value = curRole;
        }
      }
    }

    /* ============================================================
       BRANCHES MODAL CONTROLS (ADMIN)
       ============================================================ */
    function openBranchesModal() {
      if (currentUserRole !== 'admin') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة فقط.");
        return;
      }
      renderBranchesList();
      cancelBranchForm();
      document.body.classList.add('modal-open');
      document.getElementById('branchesModal').classList.add('open');
    }

    function closeBranchesModal() {
      document.getElementById('branchesModal').classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function renderBranchesList() {
      const branches = getBranchesList();
      const container = document.getElementById('branchesListContainer');

      if (!branches || branches.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 16px;">لا توجد فروع مسجلة في المنظومة.</div>';
        return;
      }

      container.innerHTML = branches.map(b => {
        const isCurrent = (b.id === currentBranchId);
        return `
          <div style="background: white; border: 1.5px solid ${isCurrent ? 'var(--primary)' : 'var(--border)'}; border-radius: 8px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <strong style="font-size: 15px; color: var(--secondary);">${escapeHtml(b.nameAr)}</strong>
                <span style="font-size: 12px; color: var(--text-muted);">(${escapeHtml(b.nameEn)})</span>
                ${isCurrent ? '<span style="background: var(--primary-light); color: var(--primary-dark); font-weight: 800; font-size: 11px; padding: 2px 8px; border-radius: 999px;">الفرع النشط حالياً</span>' : ''}
              </div>
              <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                📍 ${escapeHtml(b.location)}
              </div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px;" onclick="openEditBranchForm('${escapeHtml(b.id)}')">
                ✏️ تعديل
              </button>
              ${!isCurrent ? `
                <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px; color: #dc2626; border-color: #fca5a5;" onclick="deleteBranch('${escapeHtml(b.id)}')">
                  🗑️ حذف
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    function showAddBranchForm() {
      document.getElementById('branchFormTitle').innerText = 'إضافة فرع جديد لشبكة ديوان ماركت';
      document.getElementById('editBranchId').value = '';
      document.getElementById('inputBranchNameAr').value = '';
      document.getElementById('inputBranchNameEn').value = '';
      document.getElementById('inputBranchLocation').value = '';
      document.getElementById('branchFormError').innerText = '';
      document.getElementById('branchFormContainer').style.display = 'block';
      document.getElementById('btnShowAddBranch').style.display = 'none';
      document.getElementById('inputBranchNameAr').focus();
    }

    function openEditBranchForm(id) {
      const branches = getBranchesList();
      const b = branches.find(item => item.id === id);
      if (!b) return;

      document.getElementById('branchFormTitle').innerText = '✏️ تعديل بيانات: ' + b.nameAr;
      document.getElementById('editBranchId').value = b.id;
      document.getElementById('inputBranchNameAr').value = b.nameAr;
      document.getElementById('inputBranchNameEn').value = b.nameEn;
      document.getElementById('inputBranchLocation').value = b.location;
      document.getElementById('branchFormError').innerText = '';
      document.getElementById('branchFormContainer').style.display = 'block';
      document.getElementById('btnShowAddBranch').style.display = 'none';
      document.getElementById('inputBranchNameAr').focus();
    }

    function cancelBranchForm() {
      document.getElementById('branchFormContainer').style.display = 'none';
      document.getElementById('btnShowAddBranch').style.display = 'block';
      document.getElementById('branchFormError').innerText = '';
    }

    function saveBranchForm() {
      if (currentUserRole !== 'admin') {
        alert("عذراً، إدارة وإضافة الفروع مخصصة للمدير العام فقط.");
        return;
      }
      const id = document.getElementById('editBranchId').value;
      const nameAr = document.getElementById('inputBranchNameAr').value.trim();
      const nameEn = document.getElementById('inputBranchNameEn').value.trim();
      const location = document.getElementById('inputBranchLocation').value.trim();
      const errBox = document.getElementById('branchFormError');

      if (!nameAr) {
        errBox.innerText = 'يرجى إدخال اسم الفرع بالعربية.';
        return;
      }
      if (!nameEn) {
        errBox.innerText = 'يرجى إدخال اسم الفرع بالإنجليزية.';
        return;
      }
      if (!location) {
        errBox.innerText = 'يرجى إدخال موقع الفرع أو المدينة.';
        return;
      }

      let list = [...getBranchesList()];

      if (!id) {
        // ADD NEW BRANCH
        const newId = 'branch_' + Date.now();
        list.push({
          id: newId,
          nameAr: nameAr,
          nameEn: nameEn,
          location: location
        });

        // Initialize default shifts for the new branch
        const allShifts = getAllBranchShifts();
        if (!allShifts[newId]) {
          allShifts[newId] = [
            { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
            { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
            { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
          ];
          saveAllBranchShifts(allShifts);
        }

        saveBranchesList(list);
        cancelBranchForm();
        renderBranchesList();
        showToast("✅ تمت إضافة الفرع الجديد (" + nameAr + ") بنجاح!");
      } else {
        // EDIT EXISTING
        const idx = list.findIndex(b => b.id === id);
        if (idx !== -1) {
          list[idx].nameAr = nameAr;
          list[idx].nameEn = nameEn;
          list[idx].location = location;

          saveBranchesList(list);
          cancelBranchForm();
          renderBranchesList();
          if (id === currentBranchId) updateBranchUI();
          showToast("✅ تم تحديث بيانات الفرع بنجاح!");
        }
      }
    }

    function deleteBranch(id) {
      if (currentUserRole !== 'admin') {
        alert("عذراً، حذف الفروع مخصص للمدير العام فقط.");
        return;
      }
      const list = getBranchesList();
      if (list.length <= 1) {
        alert("لا يمكن حذف هذا الفرع! يجب أن تحتوي المنظومة على فرع واحد على الأقل.");
        return;
      }
      if (id === currentBranchId) {
        alert("لا يمكن حذف الفرع النشط حالياً! يرجى التبديل لفرع آخر أولاً.");
        return;
      }

      const b = list.find(item => item.id === id);
      if (!confirm("هل أنت متأكد من حذف (" + (b ? b.nameAr : "هذا الفرع") + ") من المنظومة؟")) {
        return;
      }

      const updated = list.filter(item => item.id !== id);
      saveBranchesList(updated);
      cancelBranchForm();
      renderBranchesList();
      showToast("🗑️ تم حذف الفرع بنجاح!");
    }

    function resetBranchesToDefault() {
      if (currentUserRole !== 'admin') {
        alert("عذراً، استعادة الفروع الافتراضية مخصصة للمدير العام فقط.");
        return;
      }
      if (!confirm("هل تريد بالتأكيد استعادة الفروع الخمسة الأصلية؟ سيتم إلغاء أي فروع مخصصة تمت إضافتها.")) {
        return;
      }
      saveBranchesList(DEFAULT_BRANCHES);
      cancelBranchForm();
      renderBranchesList();
      if (!DEFAULT_BRANCHES.some(b => b.id === currentBranchId)) {
        currentBranchId = DEFAULT_BRANCHES[0].id;
        updateBranchUI();
      }
      showToast("🔄 تم استعادة الفروع الخمسة الأصلية بنجاح!");
    }

    function listenToFirebaseBranches() {
      if (!firebaseDb) return;
      firebaseDb.ref('config/branches').on('value', (snapshot) => {
        const val = snapshot.val();
        if (val && Array.isArray(val) && val.length > 0) {
          safeSetItem(STORAGE_KEYS.BRANCHES, JSON.stringify(val));
          populateAuthBranchSelect();
          populateHeaderBranchSelect();
          populateShiftsBranchFilter();
          populateSupervisorBranchSelect();
          const modal = document.getElementById('branchesModal');
          if (modal && modal.classList.contains('open')) {
            renderBranchesList();
          }
        }
      }, (err) => console.warn('Firebase branches listener error:', err));
    }


    // قائمة المشرفين الافتراضية مع هاشات SHA-256 المشفرة وتخصيص الفروع
    const DEFAULT_SUPERVISORS = [
      // General Manager (علي عبد العال - المدير العام لكل الفروع - PIN: 9900)
      { id: 'admin', name: 'علي عبد العال (Ali Abd El-Aal) - المدير العام', role: 'admin', branchId: 'all', pinHash: '21cedfef481c0e0cc8aa08897ca0232f065269c8a2ad607f79e9f019f0808fb8' },

      // Branch Managers (مديرو الفروع المستقلون)
      { id: 'mgr_noueiery', name: 'مدير فرع النويري', role: 'branch_manager', branchId: 'noueiery', pinHash: 'fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71' },
      { id: 'mgr_khaldeh', name: 'مدير فرع خلدة', role: 'branch_manager', branchId: 'khaldeh', pinHash: '6c94e35ccc352d4e9ef0b99562cff995a5741ce8de8ad11b568892934daee366' },
      { id: 'mgr_tariq', name: 'مدير فرع طريق الجديدة', role: 'branch_manager', branchId: 'tariq_jdideh', pinHash: '7a24738c1004bcc250f2e527aeab5e3b1891d00a5146a54b2e8c20df84a8c09d' },
      { id: 'mgr_hamra', name: 'مدير فرع الحمرا', role: 'branch_manager', branchId: 'hamra', pinHash: 'd49030599e25e8522a2eac92f91f6e7bff2e56c9af06f879671a5166242d9a32' },
      { id: 'mgr_baddawi', name: 'أحمد بدرة (Ahmad Badrah) - مدير فرع البداوي', role: 'branch_manager', branchId: 'baddawi', pinHash: '79830ce5b6d9c51eea67ac4027dc78d07c08b95d625d41e63d92df892618d841' },

      // Floor Supervisors (مسؤولو الصالة الافتراضيون)
      { id: 'sup_issa', name: 'عيسى ورور (Issa Warwar)', role: 'supervisor', branchId: 'baddawi', pinHash: '15fc36b3e80b9d7f87f7dc90cd7a2845c5d8501c30f03379fcf14154f1680380' },
      { id: 'sup_sameh', name: 'سامح الحسن (Sameh El-Hassan)', role: 'supervisor', branchId: 'baddawi', pinHash: 'be41b7f1fa56ba2b0582910053c86cf6ee7e311efc51300220df0918bb9a287b' }
    ];

    // currentUserRole initialized above with active session restoration

    // Force clear any old cached logins
    // Storage cleared cleanly

    function getSupervisorsList() {
      const saved = safeGetItem(STORAGE_KEYS.SUPERVISORS);
      if (saved) {
        const parsed = safeJsonParse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let needsUpdate = false;
          // Remove redundant legacy sup_ahmad if still present
          const legacyAhmadIdx = parsed.findIndex(p => p.id === 'sup_ahmad');
          if (legacyAhmadIdx !== -1) {
            parsed.splice(legacyAhmadIdx, 1);
            needsUpdate = true;
          }
          // One-time legacy migration ONLY if list has no managers at all (old schema)
          const hasAnyManager = parsed.some(p => p.id && p.id.startsWith('mgr_'));
          const isLegacyOnly = !hasAnyManager && parsed.some(p => p.id === 'sup1' || p.id === 'sup2');
          if (isLegacyOnly) {
            DEFAULT_SUPERVISORS.forEach(ds => {
              if (!parsed.some(p => p.id === ds.id)) {
                parsed.push(ds);
                needsUpdate = true;
              }
            });
          }
          // Remove any duplicate supervisor with name Ali Abd El-Aal if id !== 'admin'
          const duplicateAdminIdx = parsed.findIndex(p => p.id !== 'admin' && p.name && (p.name.includes('علي عبد العال') || p.name.toLowerCase().includes('ali abd')));
          if (duplicateAdminIdx !== -1) {
            parsed.splice(duplicateAdminIdx, 1);
            needsUpdate = true;
          }

          // Ensure all official users exist with correct roles & branches while PRESERVING user-edited names & custom PINs
          DEFAULT_SUPERVISORS.forEach(ds => {
            const existing = parsed.find(p => p.id === ds.id);
            if (existing) {
              if (existing.role !== ds.role) {
                existing.role = ds.role;
                needsUpdate = true;
              }
              if (existing.branchId !== ds.branchId) {
                existing.branchId = ds.branchId;
                needsUpdate = true;
              }
              // Only assign default name if name is missing/blank (do NOT overwrite custom edits in Arabic or English)
              if (!existing.name || !existing.name.trim()) {
                existing.name = ds.name;
                needsUpdate = true;
              }
              // Only assign default pinHash if user has no pinHash at all
              if (!existing.pinHash) {
                existing.pinHash = ds.pinHash;
                needsUpdate = true;
              }
            } else {
              parsed.push(ds);
              needsUpdate = true;
            }
          });

          // Strict branch association: Floor supervisors belong ONLY to their specific branch, never 'all'
          parsed.forEach(p => {
            if (p.id !== 'admin' && p.role !== 'admin') {
              if (!p.branchId || p.branchId === 'all') {
                p.branchId = 'baddawi';
                needsUpdate = true;
              }
            }
          });

          if (needsUpdate) {
            safeSetItem(STORAGE_KEYS.SUPERVISORS, JSON.stringify(parsed));
          }
          return parsed;
        }
      }
      return DEFAULT_SUPERVISORS;
    }

    function saveSupervisorsList(list, broadcast = true) {
      safeSetItem(STORAGE_KEYS.SUPERVISORS, JSON.stringify(list));
      populateAuthSupervisorSelect();
      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_SUPERVISORS',
          supervisors: list
        });
      }
      if (firebaseDb) {
        firebaseDb.ref('config/supervisors').set(list).catch(err => console.error("Firebase write error:", err));
      }
    }

    function populateAuthBranchSelect() {
      const branchSelect = document.getElementById('authBranchSelect');
      if (!branchSelect) return;
      const branches = getBranchesList();
      branchSelect.innerHTML = branches.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.nameAr)} (${escapeHtml(b.location)})</option>`).join('');
      branchSelect.value = currentBranchId;
    }

    function onAuthBranchChange() {
      const branchSelect = document.getElementById('authBranchSelect');
      if (branchSelect) {
        currentBranchId = branchSelect.value;
      }
      populateAuthSupervisorSelect();
      const pinInp = document.getElementById('authPinInput');
      if (pinInp) pinInp.value = '';
      const errorBox = document.getElementById('authError');
      if (errorBox) errorBox.innerText = '';
    }

    function populateAuthSupervisorSelect() {
      const select = document.getElementById('authSupervisorSelect');
      if (!select) return;
      const list = getSupervisorsList();
      
      // Strict branch isolation:
      // 1. General Manager (admin) appears in all branches
      // 2. All other supervisors & branch managers appear ONLY in their exact branch
      const filtered = list.filter(s => {
        if (s.id === 'admin' || s.role === 'admin') return true;
        const sBranch = s.branchId || 'baddawi';
        return sBranch === currentBranchId;
      });

      // Sort: General Manager first, then Branch Manager, then Floor Supervisors
      filtered.sort((a, b) => {
        const order = { 'admin': 1, 'branch_manager': 2, 'supervisor': 3 };
        return (order[a.role] || 3) - (order[b.role] || 3);
      });

      const currentVal = select.value;
      select.innerHTML = filtered.map(s => {
        let prefix = '👤 ';
        if (s.role === 'admin') prefix = '👑 ';
        else if (s.role === 'branch_manager') prefix = '🏢 ';
        return `<option value="${escapeHtml(s.id)}">${prefix}${escapeHtml(s.name)}</option>`;
      }).join('');

      if (currentVal && filtered.some(s => s.id === currentVal)) {
        select.value = currentVal;
      }
      if (!select.dataset.callListenerBound) {
        select.dataset.callListenerBound = 'true';
        select.addEventListener('change', (e) => {
          if (e.target.value && !document.body.classList.contains('auth-passed')) {
            currentUserId = e.target.value;
            if (typeof listenForIncomingVoiceCalls === 'function') {
              listenForIncomingVoiceCalls();
            }
          }
        });
      }
    }

    // SHA-256 Pure JS fallback implementation
    function pureJsSha256(ascii) {
      function rightRotate(value, amount) {
        return (value>>>amount) | (value<<(32 - amount));
      }
      var mathPow = Math.pow;
      var maxWord = mathPow(2, 32);
      var lengthProperty = 'length';
      var i, j;
      var result = '';
      var words = [];
      var asciiBitLength = ascii[lengthProperty]*8;
      var hash = [];
      var k = [];
      var primeCounter = 0;
      var isComposite = {};
      for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
          for (i = 0; i < 313; i += candidate) {
            isComposite[i] = candidate;
          }
          hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
          k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
        }
      }
      ascii += '\x80';
      while (ascii[lengthProperty]%64 - 56) ascii += '\x00';
      for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j>>8) return;
        words[i>>2] |= j << ((3 - i)%4)*8;
      }
      words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
      words[words[lengthProperty]] = (asciiBitLength);
      for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16);
        var oldHash = hash;
        hash = hash.slice(0, 8);
        for (i = 0; i < 64; i++) {
          var w15 = w[i - 15], w2 = w[i - 2];
          var a = hash[0], e = hash[4];
          var temp1 = hash[7]
            + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
            + ((e & hash[5]) ^ ((~e) & hash[6]))
            + k[i]
            + (w[i] = (i < 16) ? w[i] : (
                w[i - 16]
                + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3))
                + w[i - 7]
                + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10))
              )|0
            );
          var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
            + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
          hash = [(temp1 + temp2)|0].concat(hash);
          hash[4] = (hash[4] + temp1)|0;
        }
        for (i = 0; i < 8; i++) {
          hash[i] = (hash[i] + oldHash[i])|0;
        }
      }
      for (i = 0; i < 8; i++) {
        for (var i2 = 3; i2 >= 0; i2--) {
          var b = (hash[i]>>(i2*8))&255;
          result += ((b < 16) ? 0 : '') + b.toString(16);
        }
      }
      return result;
    }

    async function computeHash(str, salt = '') {
      const input = salt ? (salt + ':' + str) : str;
      if (window.crypto && crypto.subtle && window.isSecureContext) {
        try {
          const buffer = new TextEncoder().encode(input);
          const hashBuf = await crypto.subtle.digest('SHA-256', buffer);
          return Array.from(new Uint8Array(hashBuf))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
        } catch (e) {
          console.warn("crypto.subtle failed, using pureJsSha256", e);
        }
      }
      return pureJsSha256(input);
    }

    // Rate Limiting (حماية ضد التخمين)
    let failedAttempts = 0;
    let lockoutTimer = null;
    let lockoutRemaining = 0;
    let isSubmittingPin = false;

    function startLockout(seconds) {
      lockoutRemaining = seconds;
      const errorBox = document.getElementById('authError');
      const pinInput = document.getElementById('authPinInput');
      const keyBtns = document.querySelectorAll('.key-btn');

      if (pinInput) pinInput.disabled = true;
      keyBtns.forEach(btn => btn.disabled = true);

      function updateMsg() {
        if (errorBox) {
          errorBox.innerHTML = `⛔ تم قفل الإدخال مؤقتاً بسبب المحاولات المتكررة!<br>يرجى الانتظار <span style="font-size:16px; color:#ef4444; font-weight:900;">${lockoutRemaining}</span> ثانية...`;
        }
      }

      updateMsg();

      if (lockoutTimer) clearInterval(lockoutTimer);
      lockoutTimer = setInterval(() => {
        lockoutRemaining--;
        if (lockoutRemaining <= 0) {
          clearInterval(lockoutTimer);
          lockoutTimer = null;
          failedAttempts = 0;
          if (pinInput) pinInput.disabled = false;
          keyBtns.forEach(btn => btn.disabled = false);
          if (errorBox) errorBox.innerText = 'يمكنك المحاولة مجدداً الآن.';
        } else {
          updateMsg();
        }
      }, 1000);
    }

    function pressKey(num) {
      if (lockoutRemaining > 0) return;
      const input = document.getElementById('authPinInput');
      if (input.value.length < 4) {
        input.value += num;
        if (input.value.length === 4) {
          setTimeout(submitPin, 100);
        }
      }
    }

    function clearPin() {
      if (lockoutRemaining > 0) return;
      const input = document.getElementById('authPinInput');
      input.value = input.value.slice(0, -1);
      if (failedAttempts === 0) {
        document.getElementById('authError').innerText = '';
      }
    }

    // Physical keyboard listener
    window.addEventListener('keydown', (e) => {
      if (document.body.classList.contains('auth-passed')) return;
      const overlay = document.getElementById('authOverlay');
      if (!overlay || overlay.classList.contains('unlocked')) return;
      if (lockoutRemaining > 0) return;

      if (e.key >= '0' && e.key <= '9') {
        pressKey(e.key);
      } else if (e.key === 'Backspace') {
        clearPin();
      } else if (e.key === 'Enter') {
        submitPin();
      }
    });

    async function submitPin() {
      if (isSubmittingPin || lockoutRemaining > 0) return;
      isSubmittingPin = true;
      try {
        const supSelect = document.getElementById('authSupervisorSelect');
        const branchSelect = document.getElementById('authBranchSelect');
        const pin = document.getElementById('authPinInput').value;
        const list = getSupervisorsList();
        const errorBox = document.getElementById('authError');

        if (!pin || pin.length !== APP_CONFIG.PIN_LENGTH) {
          errorBox.innerText = `يرجى إدخال رمز PIN مكون من ${APP_CONFIG.PIN_LENGTH} أرقام.`;
          return;
        }

        const selectedSupId = supSelect ? supSelect.value : '';
        const selectedSup = list.find(s => s.id === selectedSupId);

        if (!selectedSup) {
          errorBox.innerText = 'يرجى اختيار اسم المشرف أولاً.';
          return;
        }

        // STRICT VALIDATION: Strictly adhere to the selected supervisor's PIN only!
        let matches = false;
        if (selectedSup.salt) {
          const saltedHash = await computeHash(pin, selectedSup.salt);
          matches = (selectedSup.pinHash === saltedHash);
        } else {
          const directHash = await computeHash(pin);
          // Legacy PIN 1122 alias support for Ahmad Badrah specifically
          const HASH_1122 = 'b3282a2f2a28757b3a18ab833de16a9c54518c0b0cf493e3f0a7cf09386f326a';
          matches = (selectedSup.pinHash === directHash) || (selectedSup.id === 'mgr_baddawi' && directHash === HASH_1122);
        }

        const matchedUser = matches ? selectedSup : null;

        if (matchedUser) {
          failedAttempts = 0;
          currentSupervisor = matchedUser.name;
          currentUserId = matchedUser.id;

          // Persist device identity so incoming calls reach this phone even after refresh/backgrounding
          try {
            localStorage.setItem('diwan_saved_user_id', matchedUser.id);
            localStorage.setItem('diwan_saved_user_name', matchedUser.name);
            localStorage.setItem('diwan_saved_user_role', matchedUser.role || 'supervisor');
            if (matchedUser.branchId) localStorage.setItem('diwan_saved_branch_id', matchedUser.branchId);
          } catch (e) {}

          if (typeof listenForIncomingVoiceCalls === 'function') {
            listenForIncomingVoiceCalls();
          }
          // Absolute role hard-locking
          if (matchedUser.id === 'admin' || (matchedUser.name && (matchedUser.name.includes('علي عبد العال') || matchedUser.name.includes('المدير العام')))) {
            currentUserRole = 'admin';
          } else if (matchedUser.role === 'branch_manager' || (matchedUser.id && matchedUser.id.startsWith('mgr_'))) {
            currentUserRole = 'branch_manager';
          } else {
            currentUserRole = matchedUser.role || 'supervisor';
          }

          // Automatically switch branch if user belongs to a specific branch
          if (matchedUser.branchId && matchedUser.branchId !== 'all') {
            currentBranchId = matchedUser.branchId;
            if (branchSelect) branchSelect.value = currentBranchId;
          } else if (branchSelect) {
            currentBranchId = branchSelect.value;
          }

          // Sync selection in dropdown
          if (supSelect) {
            populateAuthSupervisorSelect();
            supSelect.value = matchedUser.id;
          }

          // Update header admin controls
          const btnManage = document.getElementById('btnManageSupervisors');
          const btnShifts = document.getElementById('btnManageShifts');
          const btnBranches = document.getElementById('btnManageBranches');
          const btnHq = document.getElementById('btnHqOverview');
          const btnDirHead = document.getElementById('btnHeaderDirectives');
          const adminSwitcher = document.getElementById('adminBranchSwitcher');

          const execPanel = document.getElementById('adminExecutivePanel');
          const bmPanel = document.getElementById('branchManagerPanel');

          if (currentUserRole === 'admin') {
            // General Manager: Full Access Everywhere
            if (btnManage) btnManage.style.display = 'inline-flex';
            if (btnShifts) btnShifts.style.display = 'inline-flex';
            if (btnBranches) btnBranches.style.display = 'inline-flex';
            if (btnHq) btnHq.style.display = 'inline-flex';
            if (btnDirHead) btnDirHead.style.display = 'inline-flex';
                        if (adminSwitcher) {
              adminSwitcher.style.display = 'flex';
              populateHeaderBranchSelect();
            }
            if (execPanel) {
              execPanel.style.display = 'block';
              populateExecutiveBranchSelect();
            }
            if (bmPanel) bmPanel.style.display = 'none';
          } else if (currentUserRole === 'branch_manager') {
            // Branch Manager: Access to shifts & supervisors of their branch
            if (btnManage) btnManage.style.display = 'inline-flex';
            if (btnShifts) btnShifts.style.display = 'inline-flex';
            if (btnBranches) btnBranches.style.display = 'none';
            if (btnHq) btnHq.style.display = 'none';
            if (btnDirHead) btnDirHead.style.display = 'inline-flex';
                        if (adminSwitcher) adminSwitcher.style.display = 'none';
            if (execPanel) execPanel.style.display = 'none';
            if (bmPanel) {
              bmPanel.style.display = 'block';
              const bmPill = document.getElementById('bmBranchNamePill');
              const b = getBranchById(currentBranchId);
              if (bmPill) bmPill.innerText = b ? b.nameAr : '';
            }
          } else {
            // Floor Supervisor: Operational only
            if (btnManage) btnManage.style.display = 'none';
            if (btnShifts) btnShifts.style.display = 'none';
            if (btnBranches) btnBranches.style.display = 'none';
            if (btnHq) btnHq.style.display = 'none';
            if (btnDirHead) btnDirHead.style.display = 'none';
                        if (adminSwitcher) adminSwitcher.style.display = 'none';
            if (execPanel) execPanel.style.display = 'none';
            if (bmPanel) bmPanel.style.display = 'none';
          }

          listenToBranchDirectives();

          updateBranchUI();

          // Update supervisor badge display
          const activeDisplay = document.getElementById('activeSupervisorDisplay');
          const roleBadge = document.getElementById('activeRoleBadge');
          if (activeDisplay) activeDisplay.innerText = currentSupervisor;
          const execUserPill = document.getElementById('adminExecutiveUserPill') || document.querySelector('.admin-user-pill');
          if (execUserPill && currentUserRole === 'admin') {
            execUserPill.innerText = currentSupervisor;
          }
          if (roleBadge) {
            if (currentUserRole === 'admin') {
              roleBadge.innerHTML = '<span style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">👑 المدير العام (كامل الصلاحيات)</span>';
            } else if (currentUserRole === 'branch_manager') {
              roleBadge.innerHTML = '<span style="background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">🏢 مدير فرع</span>';
            } else {
              roleBadge.innerHTML = '<span style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">👤 مسؤول صالة</span>';
            }
          }
          
          // Unlock
          document.body.classList.add('auth-passed');
          document.getElementById('authOverlay').classList.add('unlocked');
          document.getElementById('authPinInput').value = '';
          errorBox.innerText = '';
          
          // Date input permission management
          const dateInput = document.getElementById('shiftDateInput');
          if (dateInput) {
            if (currentUserRole === 'admin' || currentUserRole === 'branch_manager') {
              dateInput.disabled = false;
              dateInput.style.opacity = '1';
              dateInput.title = 'تغيير تاريخ عرض العمليات (صلاحية الإدارة)';
            } else {
              dateInput.disabled = true;
              dateInput.style.opacity = '0.7';
              dateInput.title = '🔒 تاريخ اليوم ثابت لمسؤول الصالة';
            }
          }

          // Request Mobile Phone Notification Permission on login gesture
          requestNotificationPermissionPrompt(false);
          checkNotificationPermissionBanner();
          requestScreenWakeLock("floor_monitoring");
          if (typeof enableBackgroundSyncKeepAlive === 'function') {
            enableBackgroundSyncKeepAlive();
          }
          // Automatically activate background keep-alive audio session on login (crucial for background incoming calls & loud ringing!)
          if (typeof startBackgroundKeepAlive === 'function') {
            startBackgroundKeepAlive();
          } else if (typeof updateBackgroundKeepAliveUI === 'function') {
            updateBackgroundKeepAliveUI();
          }
          if ('Notification' in window && Notification.permission === 'granted') {
            if (typeof registerFcmDeviceToken === 'function') {
              registerFcmDeviceToken();
            }
          }
          if (typeof syncDeviceActivation === 'function') {
            syncDeviceActivation();
          }

          // Auto-detect current shift based on clock time
          const autoShift = getAutoDetectedShift(currentBranchId);
          currentShiftType = autoShift;
          activeShiftView = autoShift;

          // Load shift state for this branch & render
          loadStateForCurrentShift();
          if (firebaseDb) listenToFirebaseShift();
          renderAll();
          if (typeof updateManagerLivePresenceStrip === 'function') {
            updateManagerLivePresenceStrip();
          }

          const b = getBranchById(currentBranchId);
          showToast("مرحباً بك: " + currentSupervisor + " 👋 - تم فتح " + getShiftName(currentBranchId, autoShift) + " تلقائياً");
        } else {
          failedAttempts++;
          document.getElementById('authPinInput').value = '';
          if (failedAttempts >= APP_CONFIG.MAX_ATTEMPTS) {
            startLockout(APP_CONFIG.LOCKOUT_DURATION);
          } else {
            const left = APP_CONFIG.MAX_ATTEMPTS - failedAttempts;
            errorBox.innerText = `❌ رمز PIN غير صحيح لـ (${selectedSup.name})! المتبقي: ${left} محاولات قبل القفل.`;
            const card = document.querySelector('.auth-card');
            if (card) {
              card.classList.remove('shake-anim');
              void card.offsetWidth;
              card.classList.add('shake-anim');
            }
          }
        }
      } catch (err) {
        console.error('Error during PIN authentication:', err);
      } finally {
        isSubmittingPin = false;
      }
    }

        function forceHardRefresh() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for (var reg of registrations) reg.unregister();
        });
      }
      if ('caches' in window) {
        caches.keys().then(function(names) {
          for (var name of names) caches.delete(name);
        });
      }
      window.location.href = window.location.origin + window.location.pathname + '?v=' + Date.now();
    }

    function checkAuthOnLoad() {
      const dateInput = document.getElementById('shiftDateInput');
      if (dateInput) {
        dateInput.disabled = true;
        dateInput.style.opacity = '0.7';
        dateInput.title = '🔒 يرجى تسجيل الدخول أولاً';
      }
      populateShiftSelect(currentBranchId);
      if (typeof updateBackgroundKeepAliveUI === 'function') {
        updateBackgroundKeepAliveUI();
      }
      // STRICT: Always lock on reload/open
      document.body.classList.remove('auth-passed');
      const overlay = document.getElementById('authOverlay');
      if (overlay) overlay.classList.remove('unlocked');
      
      populateAuthBranchSelect();
      populateAuthSupervisorSelect();
      checkNotificationPermissionBanner();
          requestScreenWakeLock("floor_monitoring");

      const branchSelect = document.getElementById('authBranchSelect');
      if (branchSelect) {
        branchSelect.addEventListener('change', onAuthBranchChange);
        branchSelect.addEventListener('input', onAuthBranchChange);
      }

      const supSelect = document.getElementById('authSupervisorSelect');
      if (supSelect) {
        supSelect.addEventListener('change', function() {
          const pinInp = document.getElementById('authPinInput');
          if (pinInp) pinInp.value = '';
          const errorBox = document.getElementById('authError');
          if (errorBox) errorBox.innerText = '';
        });
      }

      const pinInp = document.getElementById('authPinInput');
      if (pinInp) {
        pinInp.value = '';
        pinInp.addEventListener('input', function() {
          this.value = this.value.replace(/[^0-9]/g, '');
          if (this.value.length === 4) submitPin();
        });
      }
    }

    function lockApp() {
      if (lockoutTimer) {
        clearInterval(lockoutTimer);
        lockoutTimer = null;
        lockoutRemaining = 0;
        const pinInput = document.getElementById('authPinInput');
        if (pinInput) pinInput.disabled = false;
        document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = false);
      }

      document.getElementById('authPinInput').value = '';
      document.getElementById('authError').innerText = '';

      // Close all open modals & restore body scroll
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
      document.body.classList.remove('modal-open');

      // Hide admin controls
      const btnManage = document.getElementById('btnManageSupervisors');
      const btnShifts = document.getElementById('btnManageShifts');
      const btnBranches = document.getElementById('btnManageBranches');
      const btnHq = document.getElementById('btnHqOverview');
      const btnDirHead = document.getElementById('btnHeaderDirectives');
      const adminSwitcher = document.getElementById('adminBranchSwitcher');
      if (btnManage) btnManage.style.display = 'none';
      if (btnShifts) btnShifts.style.display = 'none';
      if (btnBranches) btnBranches.style.display = 'none';
      if (btnHq) btnHq.style.display = 'none';
      if (btnDirHead) btnDirHead.style.display = 'none';
            if (adminSwitcher) adminSwitcher.style.display = 'none';
      const execPanel = document.getElementById('adminExecutivePanel');
      const bmPanel = document.getElementById('branchManagerPanel');
      if (execPanel) execPanel.style.display = 'none';
      if (bmPanel) bmPanel.style.display = 'none';

      currentUserRole = 'supervisor';

      const presStrip = document.getElementById('managerLivePresenceStrip');
      if (presStrip) presStrip.style.display = 'none';
      if (typeof stopBackgroundKeepAlive === 'function') {
        stopBackgroundKeepAlive();
      }
      if (typeof markPresenceOffline === 'function') {
        markPresenceOffline();
      }
      if (typeof stopListeningForIncomingVoiceCalls === 'function') {
        stopListeningForIncomingVoiceCalls();
      }

      const dateInput = document.getElementById('shiftDateInput');
      if (dateInput) {
        dateInput.disabled = true;
        dateInput.style.opacity = '0.7';
        dateInput.value = currentDate;
      }

      document.body.classList.remove('auth-passed');
      document.getElementById('authOverlay').classList.remove('unlocked');
      populateAuthBranchSelect();
      populateAuthSupervisorSelect();
      showToast("🔒 تم قفل الجلسة");
    }

    window.addEventListener('DOMContentLoaded', () => {
      checkAuthOnLoad();
      document.getElementById('shiftDateInput').value = currentDate;

      // Auto-detect shift by current time
      const autoShift = getAutoDetectedShift(currentBranchId);
      currentShiftType = autoShift;
      activeShiftView = autoShift;
      
      initFirebaseIfConfigured();
      loadStateForCurrentShift();
      listenToBranchDirectives();
      renderAll();
      updatePrintHeader();
    });

    function getStorageKey() {
      return 'diwan_day_ops_' + currentBranchId + '_' + currentDate;
    }

    function normalizeDayState(s) {
      if (!s) return;
      if (!s.items || typeof s.items !== 'object') s.items = {};
      if (!s.temperatures || typeof s.temperatures !== 'object') s.temperatures = {};
      if (!s.sectionNotes || typeof s.sectionNotes !== 'object') s.sectionNotes = {};

      // Prune orphan items not matching SECTIONS_DATA & migrate flat legacy items
      const validRawIds = new Set();
      SECTIONS_DATA.forEach(sec => sec.items.forEach(it => validRawIds.add(it.rawId)));
      Object.keys(s.items).forEach(rawId => {
        if (!validRawIds.has(rawId)) {
          delete s.items[rawId];
          return;
        }
        const it = s.items[rawId];
        if (it && typeof it.status === 'string') {
          const shift = currentShiftType || 'morning';
          s.items[rawId] = {
            [shift]: { status: it.status, updatedBy: it.updatedBy || '', updatedAt: it.updatedAt || '', note: it.note || '' }
          };
        }
      });

      // Migrate flat legacy temperatures if encountered
      Object.keys(s.temperatures).forEach(tName => {
        const tp = s.temperatures[tName];
        if (tp && typeof tp.value !== 'undefined') {
          const shift = currentShiftType || 'morning';
          s.temperatures[tName] = {
            [shift]: { value: tp.value, updatedBy: tp.updatedBy || '', updatedAt: tp.updatedAt || '' }
          };
        }
      });
    }

    function loadStateForCurrentShift() {
      const key = getStorageKey();
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          state = JSON.parse(saved);
          normalizeDayState(state);
        } catch (e) {
          initStateDefaults();
        }
      } else {
        // Auto-merge legacy shift records if they exist
        initStateDefaults();
        let foundLegacy = false;
        ['morning', 'evening', 'night'].forEach(sh => {
          const legacyKey = 'diwan_shift_' + currentBranchId + '_' + currentDate + '_' + sh;
          const legSaved = localStorage.getItem(legacyKey);
          if (legSaved) {
            try {
              const legState = JSON.parse(legSaved);
              if (legState && legState.items) {
                Object.keys(legState.items).forEach(rawId => {
                  const it = legState.items[rawId];
                  if (!state.items[rawId]) state.items[rawId] = {};
                  state.items[rawId][sh] = {
                    status: it.status || 'pending',
                    updatedBy: it.updatedBy || '',
                    updatedAt: it.updatedAt || '',
                    note: it.note || ''
                  };
                });
                foundLegacy = true;
              }
              if (legState && legState.temperatures) {
                Object.keys(legState.temperatures).forEach(tName => {
                  const tp = legState.temperatures[tName];
                  if (!state.temperatures[tName]) state.temperatures[tName] = {};
                  state.temperatures[tName][sh] = {
                    value: tp.value || '',
                    updatedBy: tp.updatedBy || '',
                    updatedAt: tp.updatedAt || ''
                  };
                });
                foundLegacy = true;
              }
            } catch (e) {}
          }
        });
        if (foundLegacy) {
          safeSetItem(key, JSON.stringify(state));
        }
      }
    }

    function initStateDefaults() {
      state = {
        items: {},
        temperatures: {},
        sectionNotes: {}
      };
    }

    // Carry over incomplete / handover tasks from previous shift!
    /* ============================================================
       BRANCH SHIFTS CUSTOMIZATION ENGINE
       ============================================================ */
    const DEFAULT_BRANCH_SHIFTS = {
      noueiery: [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ],
      khaldeh: [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ],
      tariq_jdideh: [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ],
      hamra: [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ],
      baddawi: [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ]
    };

    function getAllBranchShifts() {
      const saved = safeGetItem(STORAGE_KEYS.BRANCH_SHIFTS);
      if (saved) {
        const parsed = safeJsonParse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
      return JSON.parse(JSON.stringify(DEFAULT_BRANCH_SHIFTS));
    }

    function getBranchShifts(branchId) {
      const all = getAllBranchShifts();
      if (all && all[branchId] && Array.isArray(all[branchId]) && all[branchId].length > 0) {
        return all[branchId];
      }
      return DEFAULT_BRANCH_SHIFTS[branchId] || [
        { id: 'morning', nameAr: 'وردية صباحية', start: '08:00', end: '16:00' },
        { id: 'evening', nameAr: 'وردية مسائية', start: '16:00', end: '00:00' },
        { id: 'night',   nameAr: 'وردية ليلية',   start: '00:00', end: '08:00' }
      ];
    }

    function getAutoDetectedShift(branchId) {
      try {
        const now = new Date();
        const curMin = now.getHours() * 60 + now.getMinutes();
        const shifts = getBranchShifts(branchId || currentBranchId);
        for (const sh of shifts) {
          if (!sh.start || !sh.end) continue;
          const [sH, sM] = sh.start.split(':').map(Number);
          const [eH, eM] = sh.end.split(':').map(Number);
          const sMin = sH * 60 + (sM || 0);
          let eMin = eH * 60 + (eM || 0);
          if (eMin <= sMin) {
            // Crosses midnight (e.g. 16:00 to 00:00 or 00:00 to 08:00)
            if (curMin >= sMin || curMin < eMin) return sh.id;
          } else {
            if (curMin >= sMin && curMin < eMin) return sh.id;
          }
        }
        return shifts[0] ? shifts[0].id : 'morning';
      } catch (e) {
        return 'morning';
      }
    }

    function saveAllBranchShifts(shiftsData, broadcast = true) {
      safeSetItem(STORAGE_KEYS.BRANCH_SHIFTS, JSON.stringify(shiftsData));
      populateShiftSelect(currentBranchId);
      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_BRANCH_SHIFTS',
          branchShifts: shiftsData
        });
      }
      if (firebaseDb) {
        firebaseDb.ref('config/branch_shifts').set(shiftsData).catch(e => console.warn('Firebase branch shifts write error:', e));
      }
    }

    function formatTime12h(timeStr) {
      if (!timeStr) return '';
      const parts = timeStr.split(':');
      let h = parseInt(parts[0], 10);
      let m = parts[1] ? parseInt(parts[1], 10) : 0;
      const period = (h >= 12 && h < 24) ? 'م' : 'ص';
      let displayHour = h % 12;
      if (displayHour === 0) displayHour = 12;
      return String(displayHour).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ' ' + period;
    }

    function getShiftDisplayName(shift) {
      if (!shift) return '';
      if (shift.start && shift.end) {
        return shift.nameAr + ' (' + formatTime12h(shift.start) + ' - ' + formatTime12h(shift.end) + ')';
      }
      return shift.nameAr;
    }

    function getShiftName(branchId, shiftId) {
      const shifts = getBranchShifts(branchId);
      const found = shifts.find(s => s.id === shiftId);
      return found ? found.nameAr : (SHIFT_NAMES[shiftId] || shiftId);
    }

    function populateShiftSelect(branchId) {
      const select = document.getElementById('shiftTypeSelect');
      if (!select) return;
      const shifts = getBranchShifts(branchId || currentBranchId);
      select.innerHTML = shifts.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(getShiftDisplayName(s))}</option>`).join('');

      // Validate currentShiftType in this branch
      const exists = shifts.some(s => s.id === currentShiftType);
      if (!exists && shifts.length > 0) {
        currentShiftType = shifts[0].id;
      }
      select.value = currentShiftType;
    }

    /* ============================================================
       SHIFTS MODAL CONTROLS (ADMIN)
       ============================================================ */
    function openShiftsModal() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة ومديري الفروع فقط.");
        return;
      }
      populateShiftsBranchFilter();
      const filter = document.getElementById('shiftsBranchFilter');
      if (filter) {
        filter.value = currentBranchId;
        filter.disabled = (currentUserRole === 'branch_manager');
      }
      populateShiftsBranchFilter();
      renderBranchShiftsList();
      cancelShiftForm();
      document.body.classList.add('modal-open');
      document.getElementById('shiftsModal').classList.add('open');
    }

    function closeShiftsModal() {
      document.getElementById('shiftsModal').classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function populateShiftsBranchFilter() {
      const filter = document.getElementById('shiftsBranchFilter');
      if (!filter) return;
      const branches = getBranchesList();
      filter.innerHTML = branches.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.nameAr)} (${escapeHtml(b.location)})</option>`).join('');
      filter.value = currentBranchId;
    }

    function onShiftsBranchFilterChange() {
      cancelShiftForm();
      renderBranchShiftsList();
    }

    function renderBranchShiftsList() {
      const filter = document.getElementById('shiftsBranchFilter');
      const branchId = filter ? filter.value : currentBranchId;
      const shifts = getBranchShifts(branchId);
      const container = document.getElementById('branchShiftsListContainer');

      if (!shifts || shifts.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 16px;">لا توجد ورديات معرفة لهذا الفرع. أضف وردية الآن.</div>';
        return;
      }

      container.innerHTML = shifts.map((s, idx) => `
        <div style="background: white; border: 1px solid var(--border); border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="background: #e0f2fe; color: #0284c7; font-weight: 800; font-size: 11px; padding: 2px 8px; border-radius: 999px;">نوبة ${idx + 1}</span>
              <strong style="font-size: 14px; color: var(--secondary);">${escapeHtml(s.nameAr)}</strong>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
              🕒 ${formatTime12h(s.start)} إلى ${formatTime12h(s.end)}
            </div>
          </div>
          <div style="display: flex; gap: 6px;">
            <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px;" onclick="openEditShiftForm('${escapeHtml(branchId)}', '${escapeHtml(s.id)}')">
              ✏️ تعديل
            </button>
            <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px; color: #dc2626; border-color: #fca5a5;" onclick="deleteShift('${escapeHtml(branchId)}', '${escapeHtml(s.id)}')">
              🗑️ حذف
            </button>
          </div>
        </div>
      `).join('');
    }

    function showAddShiftForm() {
      document.getElementById('shiftFormTitle').innerText = 'إضافة وردية جديدة للفرع';
      document.getElementById('editShiftId').value = '';
      document.getElementById('inputShiftName').value = '';
      document.getElementById('inputShiftStart').value = '08:00';
      document.getElementById('inputShiftEnd').value = '16:00';
      document.getElementById('shiftFormError').innerText = '';
      document.getElementById('shiftFormContainer').style.display = 'block';
      document.getElementById('btnShowAddShift').style.display = 'none';
      document.getElementById('inputShiftName').focus();
    }

    function openEditShiftForm(branchId, shiftId) {
      const shifts = getBranchShifts(branchId);
      const shift = shifts.find(s => s.id === shiftId);
      if (!shift) return;

      document.getElementById('shiftFormTitle').innerText = '✏️ تعديل بيانات: ' + shift.nameAr;
      document.getElementById('editShiftId').value = shift.id;
      document.getElementById('inputShiftName').value = shift.nameAr;
      document.getElementById('inputShiftStart').value = shift.start || '08:00';
      document.getElementById('inputShiftEnd').value = shift.end || '16:00';
      document.getElementById('shiftFormError').innerText = '';
      document.getElementById('shiftFormContainer').style.display = 'block';
      document.getElementById('btnShowAddShift').style.display = 'none';
      document.getElementById('inputShiftName').focus();
    }

    function cancelShiftForm() {
      document.getElementById('shiftFormContainer').style.display = 'none';
      document.getElementById('btnShowAddShift').style.display = 'block';
      document.getElementById('shiftFormError').innerText = '';
    }

    function saveShiftForm() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، إدارة الورديات مخصصة للإدارة ومديري الفروع فقط.");
        return;
      }
      const filter = document.getElementById('shiftsBranchFilter');
      const branchId = filter ? filter.value : currentBranchId;
      if (currentUserRole === 'branch_manager' && branchId !== currentBranchId) {
        alert("عذراً، مدير الفرع يمكنه إدارة ورديات فرعه فقط.");
        return;
      } 
      const editId = document.getElementById('editShiftId').value;
      const name = document.getElementById('inputShiftName').value.trim();
      const start = document.getElementById('inputShiftStart').value;
      const end = document.getElementById('inputShiftEnd').value;
      const errBox = document.getElementById('shiftFormError');

      if (!name) {
        errBox.innerText = 'يرجى إدخال اسم الوردية.';
        return;
      }
      if (!start || !end) {
        errBox.innerText = 'يرجى تحديد وقت البدء ووقت الانتهاء.';
        return;
      }

      const all = getAllBranchShifts();
      if (!all[branchId]) all[branchId] = [];

      if (!editId) {
        // ADD NEW
        const newId = 'shift_' + Date.now();
        all[branchId].push({
          id: newId,
          nameAr: name,
          start: start,
          end: end
        });
        showToast("✅ تمت إضافة الوردية للفرع بنجاح!");
      } else {
        // EDIT
        const idx = all[branchId].findIndex(s => s.id === editId);
        if (idx !== -1) {
          all[branchId][idx].nameAr = name;
          all[branchId][idx].start = start;
          all[branchId][idx].end = end;
          showToast("✅ تم تحديث بيانات الوردية بنجاح!");
        }
      }

      saveAllBranchShifts(all);
      cancelShiftForm();
      renderBranchShiftsList();
      if (branchId === currentBranchId) {
        populateShiftSelect(currentBranchId);
        onShiftChange();
      }
    }

    function deleteShift(branchId, shiftId) {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، إدارة الورديات مخصصة للإدارة ومديري الفروع فقط.");
        return;
      }
      if (currentUserRole === 'branch_manager' && branchId !== currentBranchId) {
        alert("عذراً، مدير الفرع يمكنه حذف ورديات فرعه فقط.");
        return;
      }
      const shifts = getBranchShifts(branchId);
      if (shifts.length <= 1) {
        alert("لا يمكن حذف هذه الوردية! يجب أن يحتوي الفرع على وردية واحدة على الأقل.");
        return;
      }
      const shift = shifts.find(s => s.id === shiftId);
      if (!confirm("هل أنت متأكد من حذف " + (shift ? shift.nameAr : "هذه الوردية") + " من الفرع؟")) {
        return;
      }

      const all = getAllBranchShifts();
      all[branchId] = all[branchId].filter(s => s.id !== shiftId);
      saveAllBranchShifts(all);
      cancelShiftForm();
      renderBranchShiftsList();

      if (branchId === currentBranchId) {
        populateShiftSelect(currentBranchId);
        onShiftChange();
      }
      showToast("🗑️ تم حذف الوردية بنجاح!");
    }

    function resetBranchShiftsToDefault() {
      const filter = document.getElementById('shiftsBranchFilter');
      const branchId = filter ? filter.value : currentBranchId;
      const b = getBranchById(branchId);

      if (!confirm("هل تريد بالتأكيد إعادة ورديات (" + b.nameAr + ") إلى الوردية الصباحية والمسائية والليلية الافتراضية؟")) {
        return;
      }

      const all = getAllBranchShifts();
      all[branchId] = JSON.parse(JSON.stringify(DEFAULT_BRANCH_SHIFTS[branchId] || DEFAULT_BRANCH_SHIFTS.noueiery));
      saveAllBranchShifts(all);
      cancelShiftForm();
      renderBranchShiftsList();

      if (branchId === currentBranchId) {
        populateShiftSelect(currentBranchId);
        onShiftChange();
      }
      showToast("🔄 تم استعادة الورديات الافتراضية لفرع " + b.nameAr);
    }

    function listenToFirebaseBranchShifts() {
      if (!firebaseDb) return;
      firebaseDb.ref('config/branch_shifts').on('value', (snapshot) => {
        const val = snapshot.val();
        if (val && typeof val === 'object') {
          safeSetItem(STORAGE_KEYS.BRANCH_SHIFTS, JSON.stringify(val));
          populateShiftSelect(currentBranchId);
          const modal = document.getElementById('shiftsModal');
          if (modal && modal.classList.contains('open')) {
            renderBranchShiftsList();
          }
        }
      }, (err) => console.warn('Firebase branch shifts listener error:', err));
    }

    function checkAndCarryOverPreviousShift() {
      const branchShifts = getBranchShifts(currentBranchId);
      const curIdx = branchShifts.findIndex(s => s.id === currentShiftType);
      let prevShift = 'morning';
      let prevDate = currentDate;

      if (curIdx > 0) {
        // Previous shift in the SAME calendar day
        prevShift = branchShifts[curIdx - 1].id;
        prevDate = currentDate;
      } else {
        // First shift of the day -> Previous shift is the LAST shift of PREVIOUS DAY (C6, H6)
        const lastShift = branchShifts[branchShifts.length - 1];
        prevShift = lastShift ? lastShift.id : 'morning';
        const parts = currentDate.split('-').map(Number);
        const d = new Date(parts[0], parts[1] - 1, parts[2] - 1);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        prevDate = `${y}-${m}-${day}`;
      }

      const prevKey = 'diwan_shift_' + currentBranchId + '_' + prevDate + '_' + prevShift;
      const prevData = safeGetItem(prevKey);
      if (prevData) {
        try {
          const parsed = safeJsonParse(prevData);
          if (parsed && parsed.handover && !parsed.handover.carriedOver) {
            state.handover = {
              fromSupervisor: parsed.handover.fromSupervisor,
              handoverNotes: parsed.handover.handoverNotes,
              timestamp: parsed.handover.timestamp,
              acknowledged: false,
              carriedOverTasks: []
            };

            // Copy over pending / handover items
            if (parsed.items) {
              Object.keys(parsed.items).forEach(id => {
                const it = parsed.items[id];
                const cleanId = id.replace(/&amp;/g, '&');
                if (it.status === 'handover' || it.status === 'critical' || it.status === 'in_progress') {
                  state.items[cleanId] = { ...it };
                  state.handover.carriedOverTasks.push(cleanId);
                }
              });
            }

            // Mark carriedOver flag on previous shift to prevent duplicate migration
            parsed.handover.carriedOver = true;
            safeSetItem(prevKey, JSON.stringify(parsed));
          }
        } catch (e) {
          console.error("Error carrying over previous shift:", e);
        }
      }
    }

    let lastLocalSaveTime = 0;

    // Firebase Key Encoding (Replaces characters forbidden by Firebase: / . $ # [ ])
    function encodeFirebaseKey(key) {
      return encodeURIComponent(key || '').replace(/\./g, '%2E');
    }

    function decodeFirebaseKey(key) {
      try {
        return decodeURIComponent(key || '');
      } catch (e) {
        return key || '';
      }
    }

    function serializeStateForFirebase(s) {
      if (!s || typeof s !== 'object') return null;
      const copy = {
        handover: s.handover || {}
      };
      if (s.items && typeof s.items === 'object') {
        copy.items = {};
        for (const k in s.items) {
          copy.items[encodeFirebaseKey(k)] = s.items[k];
        }
      }
      if (s.temperatures && typeof s.temperatures === 'object') {
        copy.temperatures = {};
        for (const k in s.temperatures) {
          copy.temperatures[encodeFirebaseKey(k)] = s.temperatures[k];
        }
      }
      if (s.sectionNotes && typeof s.sectionNotes === 'object') {
        copy.sectionNotes = {};
        for (const k in s.sectionNotes) {
          copy.sectionNotes[encodeFirebaseKey(k)] = s.sectionNotes[k];
        }
      }
      return copy;
    }

    function deserializeStateFromFirebase(cloudVal) {
      if (!cloudVal || typeof cloudVal !== 'object') return null;
      const copy = {
        items: {},
        temperatures: {},
        sectionNotes: {},
        handover: cloudVal.handover || {}
      };
      if (cloudVal.items && typeof cloudVal.items === 'object') {
        for (const k in cloudVal.items) {
          copy.items[decodeFirebaseKey(k)] = cloudVal.items[k];
        }
      }
      if (cloudVal.temperatures && typeof cloudVal.temperatures === 'object') {
        for (const k in cloudVal.temperatures) {
          copy.temperatures[decodeFirebaseKey(k)] = cloudVal.temperatures[k];
        }
      }
      if (cloudVal.sectionNotes && typeof cloudVal.sectionNotes === 'object') {
        for (const k in cloudVal.sectionNotes) {
          copy.sectionNotes[decodeFirebaseKey(k)] = cloudVal.sectionNotes[k];
        }
      }
      return copy;
    }

    function mergeDayStates(localState, cloudState) {
      if (!cloudState) return localState || { items: {}, temperatures: {}, sectionNotes: {} };
      if (!localState) return cloudState;

      const merged = {
        items: { ...(localState.items || {}) },
        temperatures: { ...(localState.temperatures || {}) },
        sectionNotes: { ...(localState.sectionNotes || {}) },
        handover: cloudState.handover || localState.handover || {}
      };

      if (cloudState.items) {
        for (const rawId in cloudState.items) {
          if (!merged.items[rawId]) {
            merged.items[rawId] = cloudState.items[rawId];
          } else {
            merged.items[rawId] = {
              ...merged.items[rawId],
              ...cloudState.items[rawId]
            };
          }
        }
      }

      if (cloudState.temperatures) {
        for (const tName in cloudState.temperatures) {
          if (!merged.temperatures[tName]) {
            merged.temperatures[tName] = cloudState.temperatures[tName];
          } else {
            merged.temperatures[tName] = {
              ...merged.temperatures[tName],
              ...cloudState.temperatures[tName]
            };
          }
        }
      }

      if (cloudState.sectionNotes) {
        for (const secId in cloudState.sectionNotes) {
          if (!merged.sectionNotes[secId] || typeof merged.sectionNotes[secId] !== 'object') {
            merged.sectionNotes[secId] = cloudState.sectionNotes[secId];
          } else if (typeof cloudState.sectionNotes[secId] === 'object') {
            merged.sectionNotes[secId] = {
              ...merged.sectionNotes[secId],
              ...cloudState.sectionNotes[secId]
            };
          }
        }
      }

      return merged;
    }

    function saveState(broadcast = true) {
      lastLocalSaveTime = Date.now();
      safeSetItem(getStorageKey(), JSON.stringify(state));

      // Broadcast to other tabs locally
      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_DAY_STATE',
          branchId: currentBranchId,
          date: currentDate,
          state: state
        });
      }

      // Sync to Firebase if connected (with safe key serialization)
      if (firebaseRef) {
        const payload = serializeStateForFirebase(state);
        firebaseRef.set(payload).catch(err => console.error("Firebase write error:", err));
      }

      updateStats();
      renderScoreboard();
      renderExcelSheetTabs();
      updatePrintHeader();
    }

    /* ============================================================
       FIREBASE INTEGRATION
       ============================================================ */
    const DEFAULT_FIREBASE_CONFIG = {
      apiKey: "AIzaSyDuDHYCRHkqN3I62MXLq0dmrIk8j1cnn6o",
      authDomain: "diwan-supervisor.firebaseapp.com",
      databaseURL: "https://diwan-supervisor-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "diwan-supervisor",
      storageBucket: "diwan-supervisor.firebasestorage.app",
      messagingSenderId: "448081001183",
      appId: "1:448081001183:web:e06b7d9662b6258d92c76a",
      measurementId: "G-9KT2QL3FJ4",
      vapidKey: "BOD0MQjfHfGqbhj_X8ysumjNmA7--HdGL24u3mk_gTHsw9l54RP98cB0kvv2EGQpQdMM0MGW1hnqwIYthrgiyGU"
    };

    function initFirebaseIfConfigured() {
      let config = DEFAULT_FIREBASE_CONFIG;
      const configStr = localStorage.getItem('diwan_firebase_config');
      if (configStr) {
        try {
          const parsed = JSON.parse(configStr);
          if (parsed && parsed.databaseURL) {
            if (!parsed.apiKey || parsed.apiKey.includes('default')) {
              parsed.apiKey = DEFAULT_FIREBASE_CONFIG.apiKey;
            }
            if (!parsed.messagingSenderId) {
              parsed.messagingSenderId = DEFAULT_FIREBASE_CONFIG.messagingSenderId;
            }
            if (!parsed.appId) {
              parsed.appId = DEFAULT_FIREBASE_CONFIG.appId;
            }
            if (!parsed.vapidKey) {
              parsed.vapidKey = DEFAULT_FIREBASE_CONFIG.vapidKey;
            }
            config = Object.assign({}, DEFAULT_FIREBASE_CONFIG, parsed);
          }
        } catch (e) {
          console.warn("Custom firebase config parse error:", e);
        }
      }

      if (!config || !config.databaseURL) {
        setSyncBadgeStatus('local');
        return;
      }

      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        firebaseDb = firebase.database();
        listenToFirebaseShift();
        listenToFirebaseSupervisors();
        listenToFirebaseBranchShifts();
        listenToFirebaseBranchSections();
        listenForIncomingVoiceCalls();
        listenToFirebaseTempRanges();
        listenToFirebaseBranches();
        listenToBranchDirectives();
        initFirebaseMessaging();
        initDeviceActivationsTracker();
        setSyncBadgeStatus('cloud');
        console.log("☁️ Firebase Realtime Database connected successfully:", config.databaseURL);
      } catch (e) {
        console.error("Firebase initialization failed:", e);
        setSyncBadgeStatus('local');
      }
    }

    function listenToFirebaseShift() {
      if (!firebaseDb) return;
      if (firebaseRef) {
        try { firebaseRef.off(); } catch (e) {}
      }
      const path = 'branches/' + currentBranchId + '/daily_ops/' + currentDate;
      firebaseRef = firebaseDb.ref(path);

      firebaseRef.on('value', (snapshot) => {
        const rawCloudVal = snapshot.val();
        if (rawCloudVal) {
          const cloudVal = deserializeStateFromFirebase(rawCloudVal);
          const merged = mergeDayStates(state, cloudVal);
          normalizeDayState(merged);
          
          state = merged;
          const key = 'diwan_day_ops_' + currentBranchId + '_' + currentDate;
          safeSetItem(key, JSON.stringify(state));
          renderAll();

          // If local device had items not yet stored in cloud, upload merged state
          const serializedMerged = serializeStateForFirebase(state);
          if (JSON.stringify(serializedMerged) !== JSON.stringify(rawCloudVal)) {
            firebaseRef.set(serializedMerged).catch(e => console.warn("Cloud merge push failed:", e));
          } else if (Date.now() - lastLocalSaveTime > 2000) {
            showToast("☁️ تم استلام تحديثات العمليات السحابية من الفرع");
          }
        } else if (state && Object.keys(state.items || {}).length > 0) {
          const payload = serializeStateForFirebase(state);
          firebaseRef.set(payload).catch(e => console.warn("Initial cloud seed failed:", e));
        }
      }, (err) => {
        console.error("Firebase shift sync error:", err);
      });
    }

    function setSyncBadgeStatus(type) {
      const badge = document.getElementById('syncStatusBadge');
      const text = document.getElementById('syncStatusText');
      if (type === 'cloud') {
        if (text) text.innerText = "متزامن سحابياً ☁️";
        if (badge) {
          badge.style.background = "#ecfdf5";
          badge.style.color = "#065f46";
          badge.style.border = "1px solid #10b981";
        }
      } else {
        if (text) text.innerText = "تزامن محلي نشط 🟢";
        if (badge) {
          badge.style.background = "";
          badge.style.color = "";
          badge.style.border = "";
        }
      }
    }

    /* ============================================================
       UI RENDERING
       ============================================================ */
    function renderAll() {
      renderScoreboard();
      renderExcelSheetTabs();
      renderSections();
      updateStats();
      updatePrintHeader();
    }

    function renderHandoverBanner() {
      const banner = document.getElementById('handoverAlertBanner');
      if (!banner) return;
      if (state.handover && !state.handover.acknowledged) {
        banner.style.display = 'block';
        const fromSup = document.getElementById('handoverFromSupervisor');
        if (fromSup) fromSup.innerText = state.handover.fromSupervisor;
        const timeEl = document.getElementById('handoverTimestamp');
        if (timeEl) timeEl.innerText = state.handover.timestamp || '';
        const notesEl = document.getElementById('handoverNotesContent');
        if (notesEl) notesEl.innerText = state.handover.handoverNotes || 'لا توجد ملاحظات إضافية.';

        // Render chips for pending tasks
        const chipsContainer = document.getElementById('handoverPendingChips');
        if (chipsContainer) {
          chipsContainer.innerHTML = '';
          let pendingCount = 0;
          Object.keys(state.items).forEach(id => {
            const it = state.items[id];
            if (it && (it.status === 'handover' || it.status === 'critical' || it.status === 'in_progress')) {
              pendingCount++;
              const chip = document.createElement('div');
              chip.className = 'handover-task-chip';
              const title = getItemTitle(id);
              chip.innerHTML = (it.status === 'critical' ? '🚨 ' : '⚠️ ') + escapeHtml(title);
              chipsContainer.appendChild(chip);
            }
          });

          if (pendingCount === 0) {
            chipsContainer.innerHTML = '<span style="font-size: 12px; color: #065f46;">لا توجد مهام معلقة مرحلة. كل شيء كان مكتملاً!</span>';
          }
        }
      } else {
        banner.style.display = 'none';
      }
    }

    function acknowledgeHandover() {
      if (state.handover) {
        state.handover.acknowledged = true;
        state.handover.acknowledgedBy = currentSupervisor;
        state.handover.acknowledgedAt = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
        saveState();
        renderHandoverBanner();
        showToast("✅ تم تأكيد استلام الوردية وبدء العمل بنجاح");
      }
    }

    // Accordion State: Collapsed by default (مضبوبة افتراضياً)
    let expandedSections = new Set();

    function updateToggleAllButton() {
      const btn = document.getElementById('toggleAllSectionsBtn');
      const icon = document.getElementById('toggleAllIcon');
      const text = document.getElementById('toggleAllText');
      if (!btn) return;

      const allOpen = expandedSections.size === getBranchSections(currentBranchId, false).length;
      if (allOpen) {
        if (icon) icon.innerText = '📁';
        if (text) text.innerText = 'إغلاق الكل';
        btn.title = 'إغلاق كافة المهام (طي الكل)';
      } else {
        if (icon) icon.innerText = '📂';
        if (text) text.innerText = 'فتح الكل';
        btn.title = 'فتح كافة المهام (فتح الكل)';
      }
    }

    function toggleAllSections() {
      if (expandedSections.size === getBranchSections(currentBranchId, false).length) {
        collapseAllSections();
      } else {
        expandAllSections();
      }
    }

    function collapseAllSections() {
      expandedSections.clear();
      renderSections();
      updateToggleAllButton();
      showToast("تم إغلاق كافة المهام 📁");
    }

    function expandAllSections() {
      getBranchSections(currentBranchId, false).forEach(s => expandedSections.add(s.id));
      renderSections();
      updateToggleAllButton();
      showToast("تم فتح كافة المهام 📂");
    }

    function renderSections() {
      const container = document.getElementById('sectionsContainer');
      if (!container) return;
      container.innerHTML = '';

      const branchShifts = getBranchShifts(currentBranchId);

      const currentBranchSections = getBranchSections(currentBranchId, false);
      currentBranchSections.forEach((sec, idx) => {
        // Filter items according to activeFilter
        const matchingItems = sec.items.filter(item => {
          const itemEntry = state.items[item.rawId] || {};
          const itemState = (activeShiftView === 'all') 
            ? (itemEntry[currentShiftType] || { status: 'pending' }) 
            : (itemEntry[activeShiftView] || { status: 'pending' });
          if (activeFilter === 'all') return true;
          if (activeFilter === 'done' && itemState.status === 'done') return true;
          if (activeFilter === 'in_progress' && itemState.status === 'in_progress') return true;
          if (activeFilter === 'handover' && itemState.status === 'handover') return true;
          if (activeFilter === 'critical' && itemState.status === 'critical') return true;
          if (activeFilter === 'pending' && (!itemState.status || itemState.status === 'pending')) return true;
          return false;
        });

        // Calculate completion for section
        let secDone = 0;
        sec.items.forEach(it => {
          const itemEntry = state.items[it.rawId] || {};
          const targetSh = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
          if (itemEntry[targetSh] && itemEntry[targetSh].status === 'done') secDone++;
        });

        const isFullyDone = secDone === sec.items.length && sec.items.length > 0;

        const card = document.createElement('div');
        card.className = 'section-card';
        card.id = 'section_' + sec.id;

        // If filter is active and no items match, hide section card unless temperatures or notes exist
        const hasTemps = sec.temps && sec.temps.length > 0;
        if (activeFilter !== 'all' && matchingItems.length === 0 && !hasTemps) {
          return;
        }

        const isExpanded = expandedSections.has(sec.id);

        // Section Header with Accordion Toggle (Collapsed by default - مضبوبة افتراضياً)
        const header = document.createElement('div');
        header.className = 'section-header' + (isExpanded ? ' active' : ' is-collapsed');
        header.innerHTML = `
          <div class="section-title-group">
            <div class="section-num">${sec.num}</div>
            <div>
              <span class="section-title-ar">${escapeHtml(sec.titleAr)}</span>
              <span class="section-title-en">${escapeHtml(sec.titleEn)}</span>
            </div>
          </div>
          <div class="section-meta">
            <span class="section-badge ${isFullyDone ? 'completed' : ''}">
              ${secDone} / ${sec.items.length} ${isFullyDone ? 'مكتمل ✅' : ''}
            </span>
            <span class="section-toggle-icon">${isExpanded ? '▲' : '▼'}</span>
          </div>
        `;
        header.onclick = () => {
          if (expandedSections.has(sec.id)) {
            expandedSections.delete(sec.id);
            body.classList.add('collapsed');
            header.classList.remove('active');
            header.classList.add('is-collapsed');
            const icon = header.querySelector('.section-toggle-icon');
            if (icon) icon.innerText = '▼';
          } else {
            expandedSections.add(sec.id);
            body.classList.remove('collapsed');
            header.classList.add('active');
            header.classList.remove('is-collapsed');
            const icon = header.querySelector('.section-toggle-icon');
            if (icon) icon.innerText = '▲';
          }
          updateToggleAllButton();
        };

        // Section Body (Collapsed by default)
        const body = document.createElement('div');
        body.className = 'section-body' + (isExpanded ? '' : ' collapsed');

        // Check Items (V4.0 Multi-Shift Matrix with Permission Locking)
        matchingItems.forEach(item => {
          const itemEntry = state.items[item.rawId] || {};
          const row = document.createElement('div');
          row.className = 'item-row';
          row.id = 'row_' + encodeURIComponent(item.rawId);

          if (activeShiftView === 'all') {
            // MATRIX COMPARISON VIEW (ALL SHIFTS SIDE-BY-SIDE)
            row.innerHTML = `
              <div class="item-main" style="margin-bottom: 6px;">
                <div class="item-titles">
                  <span class="item-ar">${escapeHtml(item.ar || item.en)}</span>
                  <span class="item-en">${escapeHtml(item.en)}</span>
                </div>
              </div>
              <div class="multi-shift-grid">
                ${branchShifts.map(sh => {
                  const shData = itemEntry[sh.id] || { status: 'pending' };
                  const st = shData.status || 'pending';
                  const isDone = (st === 'done');
                  const isProgress = (st === 'in_progress');
                  const isCritical = (st === 'critical');
                  const shIcon = sh.id === 'morning' ? '☀️' : (sh.id === 'evening' ? '🌆' : '🌙');
                  const who = shData.updatedBy ? `${shData.updatedBy} (${shData.updatedAt || ''})` : 'لم تفحص بعد';
                  const editable = canEditShift(sh.id);

                  return `
                    <div class="shift-slot ${isDone ? 'slot-done' : (isCritical ? 'slot-critical' : '')} ${!editable ? 'slot-locked' : ''}">
                      <div class="slot-header">
                        <span>${shIcon} ${escapeHtml(sh.nameAr)} ${!editable ? '<small style="color: #94a3b8; font-size: 10px;" title="للاطلاع فقط">🔒</small>' : ''}</span>
                        <span class="slot-who" title="${escapeHtml(who)}">👤 ${escapeHtml(who)}</span>
                      </div>
                      <div class="slot-actions">
                        <button type="button" class="btn-slot-pill ${isDone ? 'active-done' : ''}" ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : 'title="إتمام الفحص"'} onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${sh.id}', 'done')">✅ منجز</button>
                        <button type="button" class="btn-slot-pill ${isProgress ? 'active-progress' : ''}" ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : 'title="قيد العمل"'} onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${sh.id}', 'in_progress')">🔄 قيد العمل</button>
                        <button type="button" class="btn-slot-pill ${isCritical ? 'active-critical' : ''}" ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : 'title="عطل طارئ"'} onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${sh.id}', 'critical')">🚨 عطل</button>
                      </div>
                      ${(isCritical || shData.note) ? `
                        <input type="text" class="item-note-input" style="font-size: 11px; margin-top: 4px;" ${!editable ? 'readonly' : ''} placeholder="ملاحظة خاصة بالوردية..." value="${escapeHtml(shData.note || '')}" onchange="setTaskShiftNote('${escapeSingleQuotes(item.rawId)}', '${sh.id}', this.value)">
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            `;
          } else {
            // FOCUSED SINGLE SHIFT VIEW (WITH PERMISSION LOCK INDICATOR)
            const activeData = itemEntry[activeShiftView] || { status: 'pending' };
            const editable = canEditShift(activeShiftView);
            const lastUpdated = activeData.updatedBy ? 
              `آخر فحص لهذه الوردية: ${escapeHtml(activeData.updatedBy)} (${escapeHtml(activeData.updatedAt || '')})` : 'لم تفحص بعد';

            row.innerHTML = `
              <div class="item-main">
                <div class="item-titles">
                  <span class="item-ar">${escapeHtml(item.ar || item.en)}</span>
                  <span class="item-en">${escapeHtml(item.en)}</span>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px;">
                    ${!editable ? '<span class="read-only-notice">🔒 للعرض والمراقبة فقط</span>' : ''}
                    ${branchShifts.filter(s => s.id !== activeShiftView).map(other => {
                      const othData = itemEntry[other.id] || { status: 'pending' };
                      const othIcon = other.id === 'morning' ? '☀️' : (other.id === 'evening' ? '🌆' : '🌙');
                      let othColor = '#64748b';
                      let othText = 'لم تفحص';
                      if (othData.status === 'done') { othColor = '#059669'; othText = `منجز (${othData.updatedBy || ''})`; }
                      else if (othData.status === 'critical') { othColor = '#dc2626'; othText = `عطل (${othData.updatedBy || ''})`; }
                      else if (othData.status === 'in_progress') { othColor = '#2563eb'; othText = `قيد العمل (${othData.updatedBy || ''})`; }
                      return `<span style="font-size: 11px; background: #f1f5f9; color: ${othColor}; padding: 1px 6px; border-radius: 4px; font-weight: 700;">${othIcon} ${escapeHtml(other.nameAr)}: ${escapeHtml(othText)}</span>`;
                    }).join('')}
                  </div>
                </div>
                <div class="status-group">
                  <button type="button" class="status-pill ${activeData.status === 'done' ? 'active-done' : ''}" 
                    ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : ''}
                    onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${activeShiftView}', 'done')">
                    ✅ منجز
                  </button>
                  <button type="button" class="status-pill ${activeData.status === 'in_progress' ? 'active-progress' : ''}" 
                    ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : ''}
                    onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${activeShiftView}', 'in_progress')">
                    🔄 قيد العمل
                  </button>
                  <button type="button" class="status-pill ${activeData.status === 'critical' ? 'active-critical' : ''}" 
                    ${!editable ? 'disabled title="مقفلة - للعرض فقط"' : ''}
                    onclick="setTaskShiftStatus('${escapeSingleQuotes(item.rawId)}', '${activeShiftView}', 'critical')">
                    🚨 خلل طارئ
                  </button>
                </div>
              </div>
              <div class="item-audit">
                <span>👤 ${lastUpdated}</span>
                ${activeData.status === 'critical' || activeData.note ? `
                  <input type="text" class="item-note-input" ${!editable ? 'readonly' : ''} placeholder="ملاحظة خاصة بالوردية..." 
                    value="${escapeHtml(activeData.note || '')}" 
                    onchange="setTaskShiftNote('${escapeSingleQuotes(item.rawId)}', '${activeShiftView}', this.value)">
                ` : ''}
              </div>
            `;
          }

          body.appendChild(row);
        });

        // Temperatures (Multi-Shift Daily Progression with Permission Locking)
        if (sec.temps && sec.temps.length > 0) {
          const tempBox = document.createElement('div');
          tempBox.className = 'temperatures-container';
          tempBox.innerHTML = `
            <div class="temperatures-title">
              🌡️ سجل درجات حرارة الثلاجات اليومي (${sec.titleAr})
            </div>
            <div class="temp-grid" id="tempGrid_${sec.id}"></div>
          `;

          const tempGrid = tempBox.querySelector('.temp-grid');
          sec.temps.forEach(tName => {
            const conf = getTempConfig(tName);
            const tCard = document.createElement('div');
            tCard.className = 'temp-card';
            tCard.style.flexDirection = 'column';
            tCard.style.alignItems = 'stretch';

            tCard.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div class="temp-info">
                  <h4>${escapeHtml(conf.ar || tName)}</h4>
                  <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 3px;">
                    <span style="font-size: 11.5px; color: var(--text-muted);">
                      النطاق الآمن: <strong style="color: ${conf.isCustom ? 'var(--primary)' : 'var(--secondary)'};">${conf.min}°C إلى ${conf.max}°C</strong>
                      ${conf.isCustom ? '<span style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; padding: 1px 5px; border-radius: 4px; font-size: 10px; font-weight: 800;">مخصص</span>' : ''}
                    </span>
                    ${(currentUserRole === 'admin' || currentUserRole === 'branch_manager') ? `
                      <button type="button" class="btn-range-edit" onclick="openTempRangeModal('${escapeSingleQuotes(tName)}')" title="تعديل النطاق الآمن لهذه الثلاجة (صلاحية الإدارة)">
                        ⚙️ تحديد النطاق
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>

              <div class="temp-shifts-grid">
                ${branchShifts.map(sh => {
                  const shTemp = (state.temperatures[tName] && state.temperatures[tName][sh.id]) || {};
                  const val = shTemp.value || '';
                  const numVal = parseFloat(val);
                  const isAlert = (val !== '' && !isNaN(numVal) && (numVal > conf.max || numVal < conf.min));
                  const shIcon = sh.id === 'morning' ? '☀️' : (sh.id === 'evening' ? '🌆' : '🌙');
                  const who = shTemp.updatedBy ? `${shTemp.updatedBy} (${shTemp.updatedAt || ''})` : 'لم تُسجل';
                  const editable = canEditShift(sh.id);

                  return `
                    <div class="temp-shift-col ${isAlert ? 'alert' : ''} ${!editable ? 'slot-locked' : ''}">
                      <span class="temp-shift-tag">${shIcon} ${escapeHtml(sh.nameAr)} ${!editable ? '<small style="color: #94a3b8; font-size: 10px;">🔒</small>' : ''}</span>
                      <div class="temp-shift-input-wrap">
                        <input type="number" step="0.1" inputmode="decimal" class="temp-shift-input" 
                          placeholder="--" 
                          value="${val}"
                          ${!editable ? 'readonly' : ''}
                          onchange="setShiftTemperature('${escapeSingleQuotes(tName)}', '${sh.id}', this.value)">
                        <span style="font-size: 11px; font-weight: 700; color: var(--text-muted);">°C</span>
                      </div>
                      <span class="temp-shift-who" title="${escapeHtml(who)}">👤 ${escapeHtml(who)}</span>
                      ${isAlert ? '<span style="color: #dc2626; font-size: 10px; font-weight: 800;">⚠️ غير طبيعي!</span>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            `;
            tempGrid.appendChild(tCard);
          });

          body.appendChild(tempBox);
        }

        // Section Notes
        if (sec.note) {
          const noteBox = document.createElement('div');
          noteBox.className = 'section-notes-area';
          const savedNote = (state.sectionNotes[sec.id] && typeof state.sectionNotes[sec.id] === 'object') ?
            (state.sectionNotes[sec.id][activeShiftView === 'all' ? currentShiftType : activeShiftView] || '') :
            (state.sectionNotes[sec.id] || '');
          const editable = canEditShift(activeShiftView === 'all' ? currentShiftType : activeShiftView);
          noteBox.innerHTML = `
            <label>📝 ملاحظات عامة لقسم ${sec.titleAr}:</label>
            <textarea class="section-notes-textarea" ${!editable ? 'readonly style="background: #f8fafc; cursor: not-allowed;"' : ''}
              placeholder="${editable ? `اكتب أي ملاحظات تخص قسم ${escapeHtml(sec.titleAr)}...` : 'للقراءة فقط...'}" 
              onchange="setSectionNote('${sec.id}', this.value)">${escapeHtml(savedNote)}</textarea>
          `;
          body.appendChild(noteBox);
        }

        card.appendChild(header);
        card.appendChild(body);
        container.appendChild(card);
      });
      updateToggleAllButton();
    }

    /* ============================================================
       MULTI-SHIFT CONTINUOUS OPERATIONS MATRIX CONTROLLERS (V4.0)
       ============================================================ */
    function renderExcelSheetTabs() {
      const track = document.getElementById('excelTabsTrack');
      if (!track) return;
      const branchShifts = getBranchShifts(currentBranchId);
      const b = getBranchById(currentBranchId);

      const badge = document.getElementById('excelBranchDateBadge');
      if (badge) {
        badge.innerText = `${b ? b.nameAr : currentBranchId} | ${currentDate}`;
      }

      // Master Tab: All Shifts Matrix Sheet
      const isAllActive = (activeShiftView === 'all');
      let tabsHtml = `
        <div class="excel-sheet-tab ${isAllActive ? 'active' : ''}" data-mode="all" onclick="setShiftViewMode('all')" title="عرض مقارنة شاملة لكافة ورديات اليوم">
          <span class="excel-tab-icon">🌐</span>
          <span class="excel-tab-name">مقارنة كافة الورديات (اليوم كاملاً)</span>
          <span class="excel-tab-badge-all">شاملة</span>
        </div>
      `;

      // Individual Shift Tabs
      branchShifts.forEach(shift => {
        const isActive = (activeShiftView === shift.id);
        const stats = calculateShiftStats(shift.id);
        const shiftIcon = shift.id === 'morning' ? '☀️' : (shift.id === 'evening' ? '🌆' : '🌙');

        // Determine active supervisors for this shift
        const supsSet = new Set();
        Object.values(state.items).forEach(it => {
          if (it && it[shift.id] && it[shift.id].updatedBy && it[shift.id].status !== 'pending') {
            supsSet.add(it[shift.id].updatedBy);
          }
        });
        Object.values(state.temperatures).forEach(tp => {
          if (tp && tp[shift.id] && tp[shift.id].updatedBy && tp[shift.id].value) {
            supsSet.add(tp[shift.id].updatedBy);
          }
        });

        const sups = Array.from(supsSet);
        const supDisplay = sups.length > 0 ? sups.join('، ') : 'لم تبدأ بعد';
        const pctColor = stats.percentage === 100 ? '#059669' : (stats.percentage > 0 ? '#0284c7' : '#64748b');

        tabsHtml += `
          <div class="excel-sheet-tab ${isActive ? 'active' : ''}" data-mode="${shift.id}" onclick="setShiftViewMode('${shift.id}')" title="${escapeHtml(shift.nameAr)}">
            <span class="excel-tab-icon">${shiftIcon}</span>
            <span class="excel-tab-name">${escapeHtml(shift.nameAr)}</span>
            <span class="excel-tab-sup" title="المشرف: ${escapeHtml(supDisplay)}">👤 ${escapeHtml(supDisplay)}</span>
            <span class="excel-tab-pct" style="color: ${pctColor}; background: ${stats.percentage === 100 ? '#ecfdf5' : '#f8fafc'}; border: 1px solid ${pctColor}40;">${stats.percentage}%</span>
          </div>
        `;
      });

      track.innerHTML = tabsHtml;
    }

    function scrollExcelTabs(dir) {
      const track = document.getElementById('excelTabsTrack');
      if (track) {
        track.scrollBy({ left: dir * 180, behavior: 'smooth' });
      }
    }

    function setShiftViewMode(mode, btn) {
      activeShiftView = mode;
      if (mode !== 'all') {
        currentShiftType = mode;
        const sel = document.getElementById('shiftTypeSelect');
        if (sel) sel.value = mode;
        const badge = document.getElementById('activeShiftBadge');
        if (badge) badge.innerText = getShiftName(currentBranchId, mode);
      }
      document.querySelectorAll('.shift-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.excel-sheet-tab').forEach(b => b.classList.remove('active'));

      const targetExcelTab = document.querySelector(`.excel-sheet-tab[data-mode="${mode}"]`);
      if (targetExcelTab) {
        targetExcelTab.classList.add('active');
        try { targetExcelTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); } catch(e) {}
      }

      const badge = document.getElementById('activeShiftBadge');
      if (badge) {
        badge.innerText = (mode === 'all') ? 'مقارنة كافة الورديات' : getShiftName(currentBranchId, mode);
      }
      renderAll();
    }

    function toggleAllShiftsView() {
      if (activeShiftView === 'all') {
        setShiftViewMode(currentShiftType);
      } else {
        setShiftViewMode('all');
      }
    }

    function canEditShift(shiftId) {
      // 1. General Manager and Branch Managers have full override authority across all shifts
      if (currentUserRole === 'admin' || currentUserRole === 'branch_manager') {
        return true;
      }

      // 2. Floor supervisor can only edit the shift matching the operational time window
      const shifts = getBranchShifts(currentBranchId);
      const targetShift = shifts.find(s => s.id === shiftId);
      if (!targetShift || !targetShift.start || !targetShift.end) {
        return shiftId === getAutoDetectedShift(currentBranchId);
      }

      const now = new Date();
      const curMin = now.getHours() * 60 + now.getMinutes();
      const [sH, sM] = targetShift.start.split(':').map(Number);
      const [eH, eM] = targetShift.end.split(':').map(Number);

      // Include a generous 30-minute grace window before shift start and after handover
      let sMin = (sH * 60 + (sM || 0)) - 30;
      if (sMin < 0) sMin += 1440;
      let eMin = (eH * 60 + (eM || 0)) + 30;
      if (eMin >= 1440) eMin -= 1440;

      if (eMin <= sMin) {
        return (curMin >= sMin || curMin < eMin);
      } else {
        return (curMin >= sMin && curMin < eMin);
      }
    }

    function setTaskShiftStatus(rawId, shiftId, newStatus) {
      if (!canEditShift(shiftId)) {
        const shName = getShiftName(currentBranchId, shiftId);
        showToast(`🔒 عذراً، (${shName}) مخصصة لمشرفها وللاطلاع فقط. لا يمكن التعديل إلا خلال توقيتها المعتمد أو بحساب الإدارة.`);
        return;
      }

      if (!state.items[rawId]) state.items[rawId] = {};
      if (!state.items[rawId][shiftId]) state.items[rawId][shiftId] = {};

      const cur = state.items[rawId][shiftId];
      if (cur.status === newStatus) {
        cur.status = 'pending';
        cur.updatedBy = '';
        cur.updatedAt = '';
      } else {
        cur.status = newStatus;
        cur.updatedBy = currentSupervisor;
        cur.updatedAt = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
      }

      saveState();
      renderSections();
      renderScoreboard();
    }

    function setTaskShiftNote(rawId, shiftId, noteText) {
      if (!canEditShift(shiftId)) {
        showToast('🔒 لا يمكن تعديل ملاحظات وردية أخرى.');
        renderSections();
        return;
      }

      if (!state.items[rawId]) state.items[rawId] = {};
      if (!state.items[rawId][shiftId]) state.items[rawId][shiftId] = {};

      state.items[rawId][shiftId].note = noteText;
      state.items[rawId][shiftId].updatedBy = currentSupervisor;
      state.items[rawId][shiftId].updatedAt = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
      saveState();
    }

    function setShiftTemperature(tempName, shiftId, value) {
      if (!canEditShift(shiftId)) {
        const shName = getShiftName(currentBranchId, shiftId);
        showToast(`🔒 عذراً، تسجيل حرارة (${shName}) مخصص لمشرف تلك الوردية فقط أو للإدارة.`);
        renderSections();
        return;
      }

      const parsedVal = typeof value === 'string' ? value.replace(',', '.').trim() : value;
      if (!state.temperatures[tempName]) state.temperatures[tempName] = {};
      
      state.temperatures[tempName][shiftId] = {
        value: parsedVal,
        updatedBy: currentSupervisor,
        updatedAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      };

      saveState();
      renderSections();
      if (parsedVal !== '') {
        const conf = getTempConfig(tempName);
        showToast(`🌡️ سجلت حرارة (${conf.ar || tempName}) بـ ${parsedVal}°C`);
      }
    }

    function renderScoreboard() {
      const container = document.getElementById('dailyShiftScoreboard');
      if (!container) return;
      const branchShifts = getBranchShifts(currentBranchId);

      container.innerHTML = branchShifts.map(shift => {
        const stats = calculateShiftStats(shift.id);
        const isActive = (shift.id === currentShiftType);
        
        // Determine active supervisors for this shift
        const supsSet = new Set();
        Object.values(state.items).forEach(it => {
          if (it && it[shift.id] && it[shift.id].updatedBy && it[shift.id].status !== 'pending') {
            supsSet.add(it[shift.id].updatedBy);
          }
        });
        Object.values(state.temperatures).forEach(tp => {
          if (tp && tp[shift.id] && tp[shift.id].updatedBy && tp[shift.id].value) {
            supsSet.add(tp[shift.id].updatedBy);
          }
        });

        const sups = Array.from(supsSet);
        const supDisplay = sups.length > 0 ? sups.join('، ') : 'لم يبدأ بعد';
        const shiftIcon = shift.id === 'morning' ? '☀️' : (shift.id === 'evening' ? '🌆' : '🌙');

        return `
          <div class="score-card ${isActive ? 'active-shift-card' : ''}" onclick="setShiftViewMode('${shift.id}')" style="cursor: pointer;" title="انقر للتركيز على هذه الوردية">
            <div class="score-card-header">
              <div class="score-shift-title">
                <span>${shiftIcon}</span>
                <span>${escapeHtml(shift.nameAr)}</span>
                ${isActive ? '<span style="background: #ecfdf5; color: #059669; font-size: 10px; padding: 1px 6px; border-radius: 999px; font-weight: 800; border: 1px solid #a7f3d0;">تسجيلك الحالي</span>' : ''}
              </div>
              <span class="score-stat-pill" style="color: ${stats.percentage === 100 ? '#059669' : 'var(--secondary)'};">${stats.percentage}%</span>
            </div>
            <div style="background: #e2e8f0; border-radius: 999px; height: 6px; overflow: hidden; margin-bottom: 8px;">
              <div style="background: ${stats.critical > 0 ? 'var(--danger)' : 'var(--primary)'}; width: ${stats.percentage}%; height: 100%; transition: width 0.3s ease;"></div>
            </div>
            <div class="score-card-body">
              <div>
                <span style="font-size: 11px; color: var(--text-muted); display: block;">المشرف المسؤول:</span>
                <span class="score-sup-name">${escapeHtml(supDisplay)}</span>
              </div>
              <div style="text-align: left; font-size: 11.5px; font-weight: 700;">
                <span style="color: var(--primary);">✅ ${stats.done}</span>
                ${stats.critical > 0 ? `<span style="color: var(--danger); margin-right: 6px;">🚨 ${stats.critical}</span>` : ''}
                <span style="color: var(--text-muted); margin-right: 6px;">⏳ ${stats.pending}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    /* ============================================================
       STATE UPDATERS
       ============================================================ */
    function getStatusLabel(s) {
      if (s === 'done') return 'منجز ✅';
      if (s === 'in_progress') return 'قيد العمل 🔄';
      if (s === 'handover') return 'للوردية القادمة ⚠️';
      if (s === 'critical') return 'خلل طارئ 🚨';
      return 'لم يبدأ ⏳';
    }

    function setItemStatus(rawId, newStatus) {
      const targetSh = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
      setTaskShiftStatus(rawId, targetSh, newStatus);
    }

    function setItemNote(rawId, noteText) {
      const targetSh = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
      setTaskShiftNote(rawId, targetSh, noteText);
    }

    /* ============================================================
       CUSTOM REFRIGERATOR TEMPERATURE RANGES (SUPERVISOR DEFINED)
       ============================================================ */
    function getBranchTempRanges(branchId) {
      const bId = branchId || currentBranchId;
      const key = 'diwan_temp_ranges_' + bId;
      const saved = safeGetItem(key);
      if (saved) {
        const parsed = safeJsonParse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
      return {};
    }

    function saveBranchTempRanges(branchId, ranges, broadcast = true) {
      const bId = branchId || currentBranchId;
      const key = 'diwan_temp_ranges_' + bId;
      safeSetItem(key, JSON.stringify(ranges));
      if (broadcast && broadcastChannel) {
        broadcastChannel.postMessage({
          type: 'SYNC_TEMP_RANGES',
          branchId: bId,
          ranges: ranges
        });
      }
      if (firebaseDb) {
        firebaseDb.ref('branches/' + bId + '/config/tempRanges').set(ranges).catch(e => console.warn("Firebase tempRanges write failed:", e));
      }
    }

    function getTempConfig(tName) {
      const defaultConf = TEMP_CONFIGS[tName] || { min: 0, max: 5, target: '0°C - 5°C', ar: tName };
      const customRanges = getBranchTempRanges(currentBranchId);
      if (customRanges && customRanges[tName]) {
        const custom = customRanges[tName];
        return {
          ...defaultConf,
          min: custom.min,
          max: custom.max,
          target: `${custom.min}°C - ${custom.max}°C`,
          isCustom: true
        };
      }
      return defaultConf;
    }

    function openTempRangeModal(tName) {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        showToast('🔒 تعديل النطاق الآمن لدرجات الحرارة مخصص للإدارة فقط.');
        return;
      }
      const conf = getTempConfig(tName);
      const b = getBranchById(currentBranchId);
      document.getElementById('editTempTargetName').value = tName;
      document.getElementById('tempRangeModalTitle').innerText = 'تحديد نطاق: ' + (conf.ar || tName);
      document.getElementById('tempRangeModalSubtitle').innerText = 'الفرع الحالي: ' + (b ? b.nameAr : currentBranchId);
      document.getElementById('inputTempMin').value = conf.min;
      document.getElementById('inputTempMax').value = conf.max;
      document.getElementById('tempRangeError').innerText = '';
      const modal = document.getElementById('tempRangeModal');
      if (modal) {
        modal.classList.add('open');
        document.body.classList.add('modal-open');
      }
      const minInp = document.getElementById('inputTempMin');
      if (minInp) minInp.focus();
    }

    function closeTempRangeModal() {
      const modal = document.getElementById('tempRangeModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
      const errBox = document.getElementById('tempRangeError');
      if (errBox) errBox.innerText = '';
    }

    function saveCustomTempRange() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert('عذراً، تعديل درجات الحرارة مخصص للإدارة ومديري الفروع فقط.');
        return;
      }
      const tName = document.getElementById('editTempTargetName').value;
      const minVal = parseFloat(document.getElementById('inputTempMin').value);
      const maxVal = parseFloat(document.getElementById('inputTempMax').value);
      const errBox = document.getElementById('tempRangeError');

      if (isNaN(minVal) || isNaN(maxVal)) {
        errBox.innerText = 'يرجى إدخال أرقام صحيحة للحدين الأدنى والأقصى.';
        return;
      }
      if (minVal >= maxVal) {
        errBox.innerText = 'الحد الأدنى يجب أن يكون أقل من الحد الأقصى للحرارة.';
        return;
      }

      const ranges = getBranchTempRanges(currentBranchId);
      ranges[tName] = {
        min: minVal,
        max: maxVal,
        updatedBy: currentSupervisor,
        updatedAt: new Date().toISOString()
      };

      saveBranchTempRanges(currentBranchId, ranges);
      closeTempRangeModal();
      renderSections();
      const conf = getTempConfig(tName);
      showToast(`✅ تم تحديد النطاق الآمن لـ (${conf.ar || tName}): ${minVal}°C إلى ${maxVal}°C`);
    }

    function resetTempRangeToDefault() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert('عذراً، استعادة النطاق الافتراضي مخصصة للإدارة فقط.');
        return;
      }
      const tName = document.getElementById('editTempTargetName').value;
      const defaultConf = TEMP_CONFIGS[tName];
      if (!defaultConf) return;

      if (!confirm(`هل أنت متأكد من استعادة النطاق الافتراضي (${defaultConf.target}) لهذه الثلاجة؟`)) {
        return;
      }

      const ranges = getBranchTempRanges(currentBranchId);
      delete ranges[tName];
      saveBranchTempRanges(currentBranchId, ranges);
      closeTempRangeModal();
      renderSections();
      showToast(`🔄 تمت استعادة النطاق الافتراضي (${defaultConf.target}) بنجاح`);
    }

    function listenToFirebaseTempRanges() {
      if (!firebaseDb) return;
      firebaseDb.ref('branches/' + currentBranchId + '/config/tempRanges').on('value', snapshot => {
        const val = snapshot.val();
        if (val && typeof val === 'object') {
          safeSetItem('diwan_temp_ranges_' + currentBranchId, JSON.stringify(val));
          renderSections();
        }
      });
    }

    function setTemperature(tempName, value) {
      const targetSh = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
      setShiftTemperature(tempName, targetSh, value);
    }

    function setSectionNote(secId, note) {
      if (!state.sectionNotes[secId] || typeof state.sectionNotes[secId] !== 'object') {
        state.sectionNotes[secId] = {};
      }
      const targetSh = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
      state.sectionNotes[secId][targetSh] = note;
      saveState();
      showToast("تم حفظ ملاحظة القسم");
    }

    /* ============================================================
       STATS & FILTERS
       ============================================================ */
    function updateStats() {
      const targetShift = (activeShiftView === 'all') ? currentShiftType : activeShiftView;
      const s = calculateShiftStats(targetShift);

      document.getElementById('statDone').innerText = s.done;
      document.getElementById('statProgress').innerText = s.inProgress;
      const elH = document.getElementById('statHandover'); if (elH) elH.innerText = s.handover;
      document.getElementById('statCritical').innerText = s.critical;

      document.getElementById('progressPercentage').innerText = s.percentage + '%';
      const progressBar = document.getElementById('progressBar');
      if (progressBar) {
        progressBar.style.width = s.percentage + '%';
        const track = progressBar.parentElement;
        if (track) track.setAttribute('aria-valuenow', s.percentage);
      }
    }

    function setFilter(filterType, btnElement) {
      activeFilter = filterType;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      if (btnElement) {
        btnElement.classList.add('active');
      } else {
        const targetBtn = document.querySelector(`.filter-btn[onclick*="'${filterType}'"]`);
        if (targetBtn) targetBtn.classList.add('active');
      }
      renderSections();
    }

    function onShiftChange() {
      currentShiftType = document.getElementById('shiftTypeSelect').value;
      const badge = document.getElementById('activeShiftBadge');
      if (badge) badge.innerText = getShiftName(currentBranchId, currentShiftType);
      setShiftViewMode(currentShiftType);
      showToast("تم فتح ورقة: " + getShiftName(currentBranchId, currentShiftType));
    }

    function onDateChange() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        showToast("🔒 تغيير تاريخ العمليات مخصص للإدارة العامة ومدير الفرع فقط.");
        const dateInput = document.getElementById('shiftDateInput');
        if (dateInput) dateInput.value = currentDate;
        return;
      }
      currentDate = document.getElementById('shiftDateInput').value;
      loadStateForCurrentShift();
      if (firebaseDb) listenToFirebaseShift();
      renderAll();
      showToast("تم تغيير التاريخ إلى: " + currentDate);
    }

    function updatePrintHeader() {
      const b = getBranchById(currentBranchId);
      const meta = document.getElementById('printMeta');
      if (meta) {
        const shName = getShiftName(currentBranchId, currentShiftType);
        meta.innerText = `الفرع: ${b.nameAr} | التاريخ: ${currentDate} | الوردية: ${shName} | المشرف المسؤول: ${currentSupervisor}`;
      }
    }

    /* ============================================================
       HANDOVER WORKFLOW (تسليم واستلام الوردية)
       ============================================================ */
    function getItemTitle(rawId) {
      if (!rawId) return '';
      const secList = getBranchSections(currentBranchId, false);
      for (const sec of secList) {
        if (sec.items) {
          const it = sec.items.find(i => i.rawId === rawId);
          if (it) {
            return `${sec.titleAr} (${it.ar || it.en})`;
          }
        }
      }
      return rawId;
    }

    function openHandoverModal() {
      const s = calculateStats(state.items);

      const supSpan = document.getElementById('modalSupervisorName');
      if (supSpan) supSpan.innerText = currentSupervisor;

      const shiftSpan = document.getElementById('modalShiftType');
      if (shiftSpan) shiftSpan.innerText = getShiftName(currentBranchId, currentShiftType);

      const compSpan = document.getElementById('modalCompletedCount');
      if (compSpan) compSpan.innerText = s.done;

      const totalSpan = document.getElementById('modalTotalCount');
      if (totalSpan) totalSpan.innerText = s.total;

      const pendingSpan = document.getElementById('modalPendingCount');
      if (pendingSpan) pendingSpan.innerText = (s.pending + s.inProgress + s.handover);

      const critSpan = document.getElementById('modalCriticalCount');
      if (critSpan) critSpan.innerText = s.critical;

      const notesArea = document.getElementById('handoverModalNotes');
      if (notesArea) {
        notesArea.value = (state.handover && state.handover.handoverNotes) ? state.handover.handoverNotes : '';
      }

      const modal = document.getElementById('handoverModal');
      if (modal) {
        modal.classList.add('open');
        document.body.classList.add('modal-open');
      }
    }

    function closeHandoverModal() {
      const modal = document.getElementById('handoverModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function submitHandover() {
      const s = calculateStats(state.items);
      let confirmMsg = "هل أنت متأكد من إنهاء وتسليم ورديتك الحالية؟\nسيتم حفظ وتجميد السجل وترحيل المهام المعلقة للمشرف التالي.";
      if (s.percentage < 30) {
        confirmMsg = `⚠️ تنبيه هام:\nنسبة الإنجاز في هذه الوردية منخفضة جداً (${s.percentage}% فقط - تم إنجاز ${s.done} من أصل ${s.total} مهمة).\n\nهل أنت متأكد تماماً من إنهاء وتسليم الوردية بهذه النسبة؟`;
      }
      if (!confirm(confirmMsg)) {
        return;
      }
      const notesArea = document.getElementById('handoverModalNotes');
      const notes = notesArea ? notesArea.value.trim() : '';
      const now = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

      state.handover = {
        fromSupervisor: currentSupervisor,
        handoverNotes: notes,
        timestamp: 'اليوم ' + now,
        submittedAt: new Date().toISOString(),
        acknowledged: false,
        carriedOver: false
      };

      // Save to archive list
      saveToArchive();

      saveState();
      closeHandoverModal();
      showToast("✅ تم تسليم الوردية وحفظ السجل للمشرف القادم!");
      renderHandoverBanner();

      setTimeout(() => {
        if (confirm("✅ تم تسليم الوردية وحفظ السجل بنجاح!\n\nهل ترغب في قفل الشاشة الآن ليتمكن مشرف الوردية القادمة من تسجيل دخوله؟")) {
          lockApp();
        }
      }, 400);
    }

    function saveToArchive() {
      const b = getBranchById(currentBranchId);
      const key = STORAGE_KEYS.ARCHIVE_PREFIX + currentBranchId;
      const archiveList = safeJsonParse(safeGetItem(key), []);
      const s = calculateStats(state.items);

      const record = {
        branchId: currentBranchId,
        branchName: b ? b.nameAr : currentBranchId,
        date: currentDate,
        shiftType: currentShiftType,
        shiftName: getShiftName(currentBranchId, currentShiftType),
        supervisor: currentSupervisor,
        timestamp: new Date().toLocaleString('ar-EG'),
        handoverNotes: (state.handover && state.handover.handoverNotes) || '',
        doneCount: s.done,
        totalCount: s.total,
        handoverCount: s.handover,
        criticalCount: s.critical
      };

      archiveList.unshift(record);
      const trimmed = archiveList.slice(0, APP_CONFIG.ARCHIVE_LIMIT);
      safeSetItem(key, JSON.stringify(trimmed));

      // Sync archive to Firebase if connected (L10)
      if (firebaseDb) {
        firebaseDb.ref('branches/' + currentBranchId + '/archive').set(trimmed).catch(e => console.warn("Firebase archive sync failed:", e));
      }
    }

    /* ============================================================
       HISTORY MODAL
       ============================================================ */
    function openHistoryModal() {
      document.body.classList.add('modal-open');
      const b = getBranchById(currentBranchId);
      const container = document.getElementById('historyListContainer');
      const key = STORAGE_KEYS.ARCHIVE_PREFIX + currentBranchId;
      const archiveList = safeJsonParse(safeGetItem(key), []);

      if (archiveList.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #94a3b8; padding: 20px;">لا توجد ورديات سابقة مسجلة في الأرشيف بعد.</div>';
      } else {
        container.innerHTML = archiveList.map(a => `
          <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 700;">
              <span>${escapeHtml(a.date)} - ${escapeHtml(a.shiftName)}</span>
              <span style="color: var(--primary);">👤 ${escapeHtml(a.supervisor)}</span>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
              إنجاز: ${a.doneCount}/${a.totalCount || TOTAL_ITEMS} مكتملة | محولة: ${a.handoverCount} | طارئة: ${a.criticalCount}
            </div>
            ${a.handoverNotes ? `<div style="font-size: 13px; color: #78350f; background: #fef3c7; padding: 6px 10px; border-radius: 6px; margin-top: 6px;">${escapeHtml(a.handoverNotes)}</div>` : ''}
          </div>
        `).join('');
      }

      document.getElementById('historyModal').classList.add('open');
    }

    function closeHistoryModal() {
      document.getElementById('historyModal').classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    // Cloud settings modal removed per admin preference

    /* ============================================================
       HELPERS
       ============================================================ */
    function createToastContainer() {
      const container = document.createElement('div');
      container.id = 'toastContainer';
      container.style.cssText = 'position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column-reverse; gap: 8px; z-index: 9999; pointer-events: none; width: 100%; max-width: 400px; align-items: center;';
      document.body.appendChild(container);
      return container;
    }

    function showToast(msg) {
      const toastContainer = document.getElementById('toastContainer') || createToastContainer();
      const toast = document.createElement('div');
      toast.style.cssText = 'background: #0f172a; color: white; padding: 12px 24px; border-radius: 9999px; font-size: 14px; font-weight: 700; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); opacity: 0; transform: translateY(20px) scale(0.95); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); display: flex; align-items: center; justify-content: center; gap: 10px; max-width: 90vw; text-align: center; pointer-events: auto;';
      toast.innerHTML = msg;
      
      toastContainer.appendChild(toast);
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          toast.style.opacity = '1';
          toast.style.transform = 'translateY(0) scale(1)';
        });
      });

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px) scale(0.95)';
        setTimeout(() => toast.remove(), 400);
      }, 4000);
    }

    function escapeSingleQuotes(str) {
      return (str || '').replace(/'/g, "\\'");
    }

    /* ============================================================
       SUPERVISOR MANAGEMENT (ADMIN EXCLUSIVE)
       ============================================================ */
    let firebaseSupervisorsRef = null;

    function listenToFirebaseSupervisors() {
      if (!firebaseDb) return;
      if (firebaseSupervisorsRef) {
        try { firebaseSupervisorsRef.off(); } catch (e) {}
      }
      firebaseSupervisorsRef = firebaseDb.ref('config/supervisors');
      firebaseSupervisorsRef.on('value', (snapshot) => {
        let val = snapshot.val();
        if (val && Array.isArray(val) && val.length > 0) {
          // Auto-merge & update default users and names in Firebase data
          let needsUpdate = false;
          // Remove duplicate Ali Abd El-Aal
          const duplicateAdminFirebaseIdx = val.findIndex(p => p.id !== 'admin' && p.name && p.name.includes('علي عبد العال'));
          if (duplicateAdminFirebaseIdx !== -1) {
            val.splice(duplicateAdminFirebaseIdx, 1);
            needsUpdate = true;
          }

          DEFAULT_SUPERVISORS.forEach(ds => {
            const existing = val.find(p => p.id === ds.id);
            if (!existing) {
              val.push(ds);
              needsUpdate = true;
            } else {
              if (existing.role !== ds.role) {
                existing.role = ds.role;
                needsUpdate = true;
              }
              if (existing.branchId !== ds.branchId) {
                existing.branchId = ds.branchId;
                needsUpdate = true;
              }
              // Preserve custom edited names (Arabic or English) - do NOT overwrite unless empty
              if (!existing.name || !existing.name.trim()) {
                existing.name = ds.name;
                needsUpdate = true;
              }
              if (!existing.pinHash) {
                existing.pinHash = ds.pinHash;
                needsUpdate = true;
              }
            }
          });

          // Strict branch association in Firebase
          val.forEach(p => {
            if (p.id !== 'admin' && p.role !== 'admin') {
              if (!p.branchId || p.branchId === 'all') {
                p.branchId = 'baddawi';
                needsUpdate = true;
              }
            }
          });
          // Remove redundant legacy sup_ahmad
          const legacyAhmadIdx = val.findIndex(p => p.id === 'sup_ahmad');
          if (legacyAhmadIdx !== -1) {
            val.splice(legacyAhmadIdx, 1);
            needsUpdate = true;
          }
          safeSetItem(STORAGE_KEYS.SUPERVISORS, JSON.stringify(val));
          if (needsUpdate && firebaseDb) {
            firebaseDb.ref('config/supervisors').set(val).catch(e => console.warn(e));
          }
          populateAuthSupervisorSelect();
          const modal = document.getElementById('supervisorsModal');
          if (modal && modal.classList.contains('open')) {
            renderSupervisorsList();
          }
        }
      }, (err) => {
        console.error('Firebase supervisors sync error:', err);
      });
    }

    function openSupervisorsModal() {
      document.body.classList.add('modal-open');
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة ومديري الفروع فقط.");
        return;
      }
      cancelSupervisorForm();
      populateSupervisorBranchSelect();

      const b = getBranchById(currentBranchId);
      const addBtn = document.getElementById('btnShowAddSupervisor');
      if (addBtn) {
        addBtn.innerText = (currentUserRole === 'branch_manager')
          ? `➕ إضافة مسؤول صالة لفرع (${b ? b.nameAr : ''})`
          : '➕ إضافة مسؤول صالة أو مدير جديد';
      }

      const desc = document.getElementById('supervisorsModalDesc');
      if (desc) {
        desc.innerText = (currentUserRole === 'branch_manager')
          ? `بصفتك مدير فرع (${b ? b.nameAr : ''})، يمكنك إضافة وتعديل مسؤولي الصالة التابعين لفرعك فقط.`
          : 'يمكن للمدير العام هنا إضافة مسؤولي صالة ومديري فروع جدد، تعديل بياناتهم، أو حذفهم مع المزامنة اللحظية.';
      }

      const resetBtn = document.getElementById('btnResetSupervisors');
      if (resetBtn) {
        resetBtn.style.display = (currentUserRole === 'admin') ? 'inline-block' : 'none';
      }

      if (firebaseDb) {
        firebaseDb.ref('fcm_devices').once('value').then(snap => {
          const val = snap.val();
          if (val && typeof val === 'object') {
            deviceActivationsCache = val;
            renderSupervisorsList();
          }
        }).catch(e => {});
        firebaseDb.ref('presence').once('value').then(snap => {
          const val = snap.val();
          if (val && typeof val === 'object') {
            livePresenceCache = val;
            renderSupervisorsList();
          }
        }).catch(e => {});
      }
      renderSupervisorsList();
      document.getElementById('supervisorsModal').classList.add('open');

      // Live pulse timer: re-render presence & relative times every 2 seconds while modal is open
      if (supervisorsModalLiveInterval) clearInterval(supervisorsModalLiveInterval);
      supervisorsModalLiveInterval = setInterval(() => {
        if (currentUserRole === 'admin' || currentUserRole === 'branch_manager') {
          updateManagerLivePresenceStrip();
        }
        const modal = document.getElementById('supervisorsModal');
        if (modal && modal.classList.contains('open')) {
          renderSupervisorsList();
        } else {
          clearInterval(supervisorsModalLiveInterval);
          supervisorsModalLiveInterval = null;
        }
      }, 2000);
    }

    function closeSupervisorsModal() {
      document.getElementById('supervisorsModal').classList.remove('open');
      document.body.classList.remove('modal-open');
      if (supervisorsModalLiveInterval) {
        clearInterval(supervisorsModalLiveInterval);
        supervisorsModalLiveInterval = null;
      }
    }

    /* ============================================================
       FIREBASE REALTIME LIVE PRESENCE & HEARTBEAT ENGINE (المزامنة اللحظية)
       ============================================================ */
    let deviceActivationsCache = {};
    let livePresenceCache = {};
    let supervisorsModalLiveInterval = null;
    let managerPresenceLiveInterval = null;
    let prevOnlineStatusMap = {};
    let hasInitializedPresenceMap = false;

    function isUserReallyOnline(userId) {
      if (!userId) return false;
      const pres = livePresenceCache[userId];
      if (!pres || pres.online !== true) return false;

      // If marked online, but lastSeen is older than 25 seconds (missed heartbeats), treat as disconnected
      const timeMs = (typeof pres.lastSeen === 'number') ? pres.lastSeen : (pres.lastSeen ? new Date(pres.lastSeen).getTime() : 0);
      const now = Date.now();
      if (timeMs && (now - timeMs > 25000)) {
        return false;
      }
      return true;
    }

    function formatLivePresenceTime(lastSeen, online) {
      if (online) {
        return 'متصل لحظياً الآن 🟢';
      }
      if (!lastSeen) {
        return 'غير متصل ⚪';
      }
      try {
        const timeMs = (typeof lastSeen === 'number') ? lastSeen : new Date(lastSeen).getTime();
        const now = Date.now();
        const diffMs = now - timeMs;
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);
        const diffHours = Math.floor(diffMins / 60);

        if (diffSecs < 60) return 'أغلق التطبيق للتو 🔴';
        if (diffMins < 60) return `غير متصل (منذ ${diffMins} د)`;
        if (diffHours < 24) {
          const d = new Date(timeMs);
          return `غير متصل (اليوم ${d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })})`;
        }
        const d = new Date(timeMs);
        return `غير متصل (${d.toLocaleDateString('ar-EG', { month: 'numeric', day: 'numeric' })})`;
      } catch (e) {
        return 'غير متصل ⚪';
      }
    }

    function formatActivationTime(isoString) {
      if (!isoString) return 'سابقاً';
      try {
        const d = new Date(isoString);
        const now = new Date();
        const diffMs = now - d;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);

        if (diffMins < 2) return 'نشط الآن 🟢';
        if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
        if (diffHours < 24) {
          return 'اليوم ' + d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
        }
        return d.toLocaleDateString('ar-EG', { month: 'numeric', day: 'numeric' });
      } catch (e) {
        return '';
      }
    }

    function getDevicePlatformString() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (navigator.userAgent.includes('Android')) return 'Android 📱';
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) return 'iPhone 🍏';
      return isMobile ? 'هاتف محمول 📱' : 'كمبيوتر / لابتوب 💻';
    }

    function showPresenceAlertToast(message, type) {
      let toastContainer = document.getElementById('presenceToastContainer');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'presenceToastContainer';
        toastContainer.style.cssText = 'position: fixed; top: 16px; left: 16px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; max-width: 400px; pointer-events: none;';
        document.body.appendChild(toastContainer);
      }

      const toast = document.createElement('div');
      const isOnline = (type === 'online');
      toast.style.cssText = `
        background: ${isOnline ? '#064e3b' : '#1e293b'};
        color: #ffffff;
        border: 1.5px solid ${isOnline ? '#34d399' : '#f87171'};
        padding: 10px 14px;
        border-radius: 10px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        font-size: 13px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: auto;
        animation: toastSlideIn 0.3s ease;
        transition: all 0.3s ease;
      `;
      toast.innerHTML = `
        <span style="font-size: 16px;">${isOnline ? '🟢' : '🔴'}</span>
        <span>${escapeHtml(message)}</span>
      `;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
      }, 4500);
    }

    function markPresenceOnline() {
      if (!firebaseDb || !currentUserId) return;
      try {
        try { firebaseDb.goOnline(); } catch (e) {}

        const myPresenceRef = firebaseDb.ref('presence/' + currentUserId);
        myPresenceRef.onDisconnect().update({
          online: false,
          lastSeen: firebase.database.ServerValue.TIMESTAMP
        });

        myPresenceRef.update({
          online: true,
          userId: currentUserId,
          userName: currentSupervisor,
          role: currentUserRole,
          branchId: currentBranchId,
          platform: getDevicePlatformString(),
          lastSeen: firebase.database.ServerValue.TIMESTAMP
        }).catch(() => {});
      } catch (err) {
        console.warn('markPresenceOnline warning:', err);
      }
    }

    function markPresenceOffline() {
      if (!firebaseDb || !currentUserId) return;
      const now = Date.now();

      // 1. Immediately update in-memory cache
      if (livePresenceCache[currentUserId]) {
        livePresenceCache[currentUserId].online = false;
        livePresenceCache[currentUserId].lastSeen = now;
      }

      // 2. Realtime Database WebSocket update
      try {
        firebaseDb.ref('presence/' + currentUserId).update({
          online: false,
          lastSeen: firebase.database.ServerValue.TIMESTAMP
        }).catch(() => {});
      } catch (e) {}

      // 3. Guaranteed REST keepalive fetch (survives tab close and browser exit)
      try {
        let dbUrl = '';
        if (firebaseDb.app && firebaseDb.app.options && firebaseDb.app.options.databaseURL) {
          dbUrl = firebaseDb.app.options.databaseURL;
        } else if (typeof DEFAULT_FIREBASE_CONFIG !== 'undefined' && DEFAULT_FIREBASE_CONFIG.databaseURL) {
          dbUrl = DEFAULT_FIREBASE_CONFIG.databaseURL;
        }
        if (dbUrl) {
          const endpoint = dbUrl.replace(/\/$/, '') + '/presence/' + encodeURIComponent(currentUserId) + '.json';
          const payload = JSON.stringify({
            online: false,
            userId: currentUserId,
            userName: currentSupervisor,
            role: currentUserRole,
            branchId: currentBranchId,
            platform: getDevicePlatformString(),
            lastSeen: now
          });

          if (window.fetch) {
            fetch(endpoint, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: payload,
              keepalive: true
            }).catch(() => {});
          }
        }
      } catch (err) {
        console.warn('markPresenceOffline REST warning:', err);
      }
    }

    let isOfflinePresenceListExpanded = false;
    window.toggleOfflinePresenceList = function() {
      isOfflinePresenceListExpanded = !isOfflinePresenceListExpanded;
      updateManagerLivePresenceStrip();
    };

    function updateManagerLivePresenceStrip() {
      const strip = document.getElementById('managerLivePresenceStrip');
      const listContainer = document.getElementById('managerLivePresenceList');
      const countBadge = document.getElementById('livePresenceOnlineCountBadge');
      const btnManage = document.getElementById('btnLivePresenceManageSups');
      const titleEl = document.getElementById('livePresenceStripTitle');
      if (!strip || !listContainer) return;

      // Only show to General Manager and Branch Manager (never to floor supervisors)
      if (!document.body.classList.contains('auth-passed') || (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager')) {
        strip.style.display = 'none';
        return;
      }
      strip.style.display = 'block';

      if (btnManage) {
        btnManage.style.display = 'inline-flex';
      }

      let list = getSupervisorsList();
      const b = getBranchById(currentBranchId);
      const bName = b ? b.nameAr : currentBranchId;

      if (currentUserRole === 'branch_manager') {
        // Each Branch Manager ONLY sees supervisors belonging strictly to his own branch:
        list = list.filter(s => s.branchId === currentBranchId && s.id !== currentUserId && s.id !== 'admin' && s.role !== 'admin');
        if (titleEl) {
          titleEl.innerHTML = `🟢 مشرفو ${escapeHtml(bName)} النشطون لحظياً (الرصد المباشر):`;
        }
      } else {
        // General Manager sees all supervisors across all branches
        list = list.filter(s => s.id !== 'admin');
        if (titleEl) {
          titleEl.innerHTML = '🟢 المشرفون النشطون لحظياً لكافة الفروع (الرصد المباشر):';
        }
      }

      // Group supervisors: Online first, then just-closed (<60s), then offline
      const onlineList = [];
      const justClosedList = [];
      const offlineList = [];

      list.forEach(s => {
        const isOnline = isUserReallyOnline(s.id);
        const pres = livePresenceCache[s.id];
        const dev = deviceActivationsCache[s.id];
        const lastSeen = pres ? pres.lastSeen : (dev ? (dev.lastActive || dev.updatedAt) : null);
        const statusText = formatLivePresenceTime(lastSeen, isOnline);
        const platStr = (pres && pres.platform) || (dev && dev.platform) || '';
        const branchName = s.branchId === 'all' ? 'جميع الفروع' : (getBranchById(s.branchId) ? getBranchById(s.branchId).nameAr : s.branchId);

        const item = { supervisor: s, isOnline, statusText, platStr, branchName, lastSeen };
        if (isOnline) {
          onlineList.push(item);
        } else if (statusText.includes('أغلق التطبيق للتو')) {
          justClosedList.push(item);
        } else {
          offlineList.push(item);
        }
      });

      // Update badge
      if (countBadge) {
        if (onlineList.length > 0) {
          if (currentUserRole === 'branch_manager') {
            countBadge.innerText = `${onlineList.length} متصل الآن من مشرفي فرعك`;
          } else {
            countBadge.innerText = `${onlineList.length} متصل لحظياً الآن`;
          }
          countBadge.style.background = '#dcfce7';
          countBadge.style.color = '#166534';
          countBadge.style.borderColor = '#bbf7d0';
        } else {
          countBadge.innerText = (currentUserRole === 'branch_manager') ? 'لا يوجد متصلون من فرعك' : 'لا يوجد متصلون حالياً';
          countBadge.style.background = '#f1f5f9';
          countBadge.style.color = '#64748b';
          countBadge.style.borderColor = '#cbd5e1';
        }
      }

      if (list.length === 0) {
        const noSupsMsg = (currentUserRole === 'branch_manager')
          ? `لا يوجد مسؤولو صالة مسجلون لـ (${escapeHtml(bName)}) بعد.`
          : 'لا يوجد مشرفون مسجلون في المنظومة.';
        listContainer.innerHTML = `<span style="font-size: 12px; color: var(--text-muted);">${noSupsMsg}</span>`;
        return;
      }

      let html = '';

      // 1. ONLINE SUPERVISORS (النشطون لحظياً) - FRONT AND CENTER
      if (onlineList.length > 0) {
        html += onlineList.map(item => {
          const s = item.supervisor;
          return `
            <div style="background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 999px; padding: 4px 12px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 1px 4px rgba(16,185,129,0.2);">
              <span class="pulse-dot" style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></span>
              <strong style="font-size: 12px; color: #065f46;">${escapeHtml(s.name)}</strong>
              ${currentUserRole === 'admin' ? `<span style="font-size: 10.5px; color: #047857; background: #d1fae5; padding: 1px 6px; border-radius: 4px;">📍 ${escapeHtml(item.branchName)}</span>` : ''}
              ${item.platStr ? `<span style="font-size: 10.5px; color: #047857;">• ${escapeHtml(item.platStr)}</span>` : ''}
              <span style="font-size: 10.5px; font-weight: 800; color: #059669;">[متصل لحظياً]</span>
              ${((currentUserRole === 'admin' && s.id !== currentUserId && s.id !== 'admin' && s.role !== 'admin') ||
                 (currentUserRole === 'branch_manager' && s.branchId === currentBranchId && s.id !== currentUserId && s.role !== 'admin' && s.id !== 'admin' && s.role !== 'branch_manager')) ? `
                <button type="button" onclick="event.stopPropagation(); initiateVoiceCall('${escapeHtml(s.id)}')" style="background: #10b981; color: white; border: none; border-radius: 999px; padding: 2px 9px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; cursor: pointer; box-shadow: 0 1px 3px rgba(16,185,129,0.3); transition: all 0.2s;" title="اتصال هاتفي صوتي مباشر عبر التطبيق">
                  <span style="font-size: 11.5px;">📞</span> اتصال
                </button>
              ` : ''}
            </div>
          `;
        }).join('');
      } else {
        const emptyText = (currentUserRole === 'branch_manager')
          ? `⚪ لا يوجد مشرفون متصلون لحظياً الآن في ${escapeHtml(bName)}`
          : '⚪ لا يوجد مشرفون متصلون لحظياً الآن في كافة الفروع';
        html += `
          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 6px 12px; font-size: 11.5px; color: #64748b; display: inline-flex; align-items: center; gap: 6px;">
            <span>${emptyText}</span>
            ${offlineList.length > 0 && offlineList[0].lastSeen ? `<span style="font-size: 10.5px; color: #94a3b8;">(آخر تواجد: ${escapeHtml(offlineList[0].supervisor.name)} - ${escapeHtml(offlineList[0].statusText)})</span>` : ''}
          </div>
        `;
      }

      // 2. RECENTLY DISCONNECTED (< 60s)
      if (justClosedList.length > 0) {
        html += justClosedList.map(item => {
          const s = item.supervisor;
          return `
            <div style="background: #fef2f2; border: 1.5px solid #f87171; border-radius: 999px; padding: 3px 10px; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(239,68,68,0.15);">
              <span style="width: 7px; height: 7px; background: #ef4444; border-radius: 50%;"></span>
              <span style="font-size: 11.5px; font-weight: 700; color: #b91c1c;">${escapeHtml(s.name)}</span>
              <span style="font-size: 10px; color: #dc2626; background: #fee2e2; padding: 1px 5px; border-radius: 4px;">أغلق التطبيق للتو 🔴</span>
            </div>
          `;
        }).join('');
      }

      // 3. OFFLINE SUPERVISORS (COLLAPSIBLE TO PREVENT SCREEN CLUTTER)
      if (offlineList.length > 0) {
        const toggleBtnText = isOfflinePresenceListExpanded
          ? `⚪ إخفاء غير المتصلين (${offlineList.length}) ▴`
          : `⚪ غير متصلين حالياً (${offlineList.length}) ▾`;

        html += `
          <button type="button" onclick="toggleOfflinePresenceList()" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 999px; padding: 3px 10px; font-size: 11px; color: #64748b; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s ease;">
            ${toggleBtnText}
          </button>
        `;

        if (isOfflinePresenceListExpanded) {
          html += offlineList.map(item => {
            const s = item.supervisor;
            return `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 999px; padding: 3px 10px; display: inline-flex; align-items: center; gap: 5px; opacity: 0.85;">
                <span style="width: 6.5px; height: 6.5px; background: #94a3b8; border-radius: 50%;"></span>
                <span style="font-size: 11px; font-weight: 600; color: #64748b;">${escapeHtml(s.name)}</span>
                <span style="font-size: 10px; color: #94a3b8;">(${escapeHtml(item.statusText)})</span>
              </div>
            `;
          }).join('');
        }
      }

      listContainer.innerHTML = html;
    }

    function handlePresenceStateChange(newPresenceMap) {
      if (!newPresenceMap || typeof newPresenceMap !== 'object') return;
      livePresenceCache = newPresenceMap;

      const isManager = (currentUserRole === 'admin' || currentUserRole === 'branch_manager');
      const supervisors = getSupervisorsList();

      if (isManager && hasInitializedPresenceMap) {
        supervisors.forEach(s => {
          if (s.id === currentUserId) return;
          if (currentUserRole === 'branch_manager' && s.branchId !== currentBranchId) return;

          const wasOnline = !!prevOnlineStatusMap[s.id];
          const isNowOnline = isUserReallyOnline(s.id);

          if (wasOnline && !isNowOnline) {
            const branchName = s.branchId === 'all' ? 'جميع الفروع' : (getBranchById(s.branchId) ? getBranchById(s.branchId).nameAr : s.branchId);
            showPresenceAlertToast(`تنبيه: المشرف "${s.name}" (${branchName}) أغلق التطبيق الآن`, 'offline');
          } else if (!wasOnline && isNowOnline) {
            const branchName = s.branchId === 'all' ? 'جميع الفروع' : (getBranchById(s.branchId) ? getBranchById(s.branchId).nameAr : s.branchId);
            const plat = (newPresenceMap[s.id] && newPresenceMap[s.id].platform) || '';
            showPresenceAlertToast(`تنبيه: المشرف "${s.name}" (${branchName}) متصل الآن لحظياً ${plat ? `• ${plat}` : ''}`, 'online');
          }
        });
      }

      supervisors.forEach(s => {
        prevOnlineStatusMap[s.id] = isUserReallyOnline(s.id);
      });
      hasInitializedPresenceMap = true;

      updateManagerLivePresenceStrip();
      const sModal = document.getElementById('supervisorsModal');
      if (sModal && sModal.classList.contains('open')) {
        renderSupervisorsList();
      }
      const dModal = document.getElementById('adminDirectiveModal');
      if (dModal && dModal.classList.contains('open')) {
        populateDirectiveSupervisorSelect();
      }
    }

    function syncDeviceActivation() {
      if (!firebaseDb || !currentUserId) return;
      try {
        const platform = getDevicePlatformString();
        const isPwa = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
        const notifStatus = ('Notification' in window) ? Notification.permission : 'unsupported';
        const hasToken = !!activeFcmToken;

        const record = {
          userId: currentUserId,
          userName: currentSupervisor,
          role: currentUserRole,
          branchId: currentBranchId,
          token: activeFcmToken || (deviceActivationsCache[currentUserId] ? deviceActivationsCache[currentUserId].token : ''),
          hasToken: hasToken,
          platform: platform,
          isPwa: isPwa,
          notificationPermission: notifStatus,
          lastActive: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        firebaseDb.ref('fcm_devices/' + currentUserId).update(record);
        if (currentBranchId && currentBranchId !== 'all') {
          firebaseDb.ref('branches/' + currentBranchId + '/fcm_tokens/' + currentUserId).update(record);
        }
        deviceActivationsCache[currentUserId] = Object.assign({}, deviceActivationsCache[currentUserId] || {}, record);

        markPresenceOnline();
      } catch (err) {
        console.warn('syncDeviceActivation warning:', err);
      }
    }


    /* ============================================================
       STUDIO TELEPHONE AUDIO & BACKGROUND CALLING ENGINE (منظومة رنين الهاتف واستمرار العمل بالخلفية)
       ============================================================ */
    let bgAudioElement = null; // Incoming ringtone audio element
    let outgoingAudioElement = null; // Outgoing ringback audio element
    let isBackgroundKeepAliveActive = false;
    let cachedIncomingRingWavUri = null;
    let cachedOutgoingRingWavUri = null;

    let cachedSilentWavUri = null;
    function getSilentWavUri() {
      if (cachedSilentWavUri) return cachedSilentWavUri;
      const sampleRate = 8000;
      const totalSamples = sampleRate * 1;
      const buffer = new ArrayBuffer(44 + totalSamples * 2);
      const view = new DataView(buffer);
      view.setUint32(0, 0x52494646, false);
      view.setUint32(4, 36 + totalSamples * 2, true);
      view.setUint32(8, 0x57415645, false);
      view.setUint32(12, 0x666d7420, false);
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, 1, true);
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      view.setUint32(36, 0x64617461, false);
      view.setUint32(40, totalSamples * 2, true);
      const blob = new Blob([buffer], { type: 'audio/wav' });
      cachedSilentWavUri = URL.createObjectURL(blob);
      return cachedSilentWavUri;
    }


    // High-Fidelity 16-Bit Studio Telephone WAV Synthesizer (Realistic Phone Cadence & Natural Harmonics)
    function createStudioTelephoneWav(type) {
      if (type === 'incoming' && cachedIncomingRingWavUri) return cachedIncomingRingWavUri;
      if (type === 'outgoing' && cachedOutgoingRingWavUri) return cachedOutgoingRingWavUri;

      const sampleRate = 16000;
      const isIncoming = type === 'incoming';
      const duration = isIncoming ? 3.5 : 4.0;
      const totalSamples = Math.floor(sampleRate * duration);

      const numBytes = 44 + totalSamples * 2; // 16-bit mono PCM
      const buffer = new ArrayBuffer(numBytes);
      const view = new DataView(buffer);

      // "RIFF" chunk
      view.setUint32(0, 0x52494646, false);
      view.setUint32(4, 36 + totalSamples * 2, true);
      view.setUint32(8, 0x57415645, false); // "WAVE"

      // "fmt " chunk
      view.setUint32(12, 0x666d7420, false);
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true); // PCM format
      view.setUint16(22, 1, true); // Mono
      view.setUint32(24, sampleRate, true);
      view.setUint32(28, sampleRate * 2, true); // 16-bit = 2 bytes/sample
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);

      // "data" chunk
      view.setUint32(36, 0x64617461, false);
      view.setUint32(40, totalSamples * 2, true);

      for (let i = 0; i < totalSamples; i++) {
        const t = i / sampleRate;
        let sampleVal = 0;

        if (isIncoming) {
          // Classic European / International Telephone cadence:
          // Burst 1: 0.00s to 0.42s
          // Gap:     0.42s to 0.62s
          // Burst 2: 0.62s to 1.04s
          // Silence: 1.04s to 3.50s
          let inRing = false;
          let ringT = 0;
          const burstLen = 0.42;

          if (t >= 0 && t < 0.42) {
            inRing = true;
            ringT = t;
          } else if (t >= 0.62 && t < 1.04) {
            inRing = true;
            ringT = t - 0.62;
          }

          if (inRing) {
            // Harmonized acoustic executive telephone bell (440Hz + 480Hz + soft chime harmonics)
            const tone1 = Math.sin(2 * Math.PI * 440 * ringT);
            const tone2 = Math.sin(2 * Math.PI * 480 * ringT);
            const harm1 = 0.20 * Math.sin(2 * Math.PI * 880 * ringT);
            const harm2 = 0.20 * Math.sin(2 * Math.PI * 960 * ringT);
            const raw = (0.40 * tone1 + 0.40 * tone2 + harm1 + harm2);

            // Smooth raised-cosine envelope (20ms attack, 25ms decay) prevents click/harshness
            let env = 1.0;
            if (ringT < 0.02) {
              env = 0.5 * (1 - Math.cos(Math.PI * ringT / 0.02));
            } else if (ringT > burstLen - 0.025) {
              env = 0.5 * (1 + Math.cos(Math.PI * (ringT - (burstLen - 0.025)) / 0.025));
            }

            sampleVal = raw * env * 24000; // Strong clear 16-bit amplitude without digital clipping
          }
        } else {
          // Standard ITU-T E.180 / Lebanese Mobile Network Ringback Tone (Pure 425Hz Sine Wave)
          // 100% clean, warm, velvety, zero distortion, zero fluttering, zero harsh harmonics
          // Tone: 0.00s to 1.15s (1.15s duration)
          // Silence: 1.15s to 4.00s (2.85s duration)
          const toneDuration = 1.15;
          if (t < toneDuration) {
            const freq = 425; // Official ITU-T standard telecom ringing frequency
            const raw = Math.sin(2 * Math.PI * freq * t);

            // Raised-Cosine (Hann) window envelope: 90ms fade-in, 110ms fade-out eliminates all click/pop artifacts
            let env = 1.0;
            const rampIn = 0.09;
            const rampOut = 0.11;
            if (t < rampIn) {
              env = 0.5 * (1 - Math.cos(Math.PI * t / rampIn));
            } else if (t > toneDuration - rampOut) {
              env = 0.5 * (1 + Math.cos(Math.PI * (t - (toneDuration - rampOut)) / rampOut));
            }

            sampleVal = raw * env * 8500; // Soft, comfortable, distortion-free amplitude (-11.7 dBFS)
          }
        }

        const clamped = Math.max(-32768, Math.min(32767, Math.floor(sampleVal)));
        view.setInt16(44 + i * 2, clamped, true);
      }

      const blob = new Blob([buffer], { type: 'audio/wav' });
      const uri = URL.createObjectURL(blob);
      if (isIncoming) cachedIncomingRingWavUri = uri;
      else cachedOutgoingRingWavUri = uri;
      return uri;
    }

    function initBackgroundKeepAliveAudio() {
      if (!bgAudioElement) {
        bgAudioElement = document.createElement('audio');
        bgAudioElement.id = 'diwanBackgroundAudio';
        bgAudioElement.setAttribute('playsinline', '');
        bgAudioElement.setAttribute('loop', '');
        bgAudioElement.setAttribute('preload', 'auto');
        bgAudioElement.style.cssText = 'position: fixed; top: -9999px; left: -9999px; width: 1px; height: 1px; opacity: 0.001; pointer-events: none;';
        bgAudioElement.src = getSilentWavUri();
        bgAudioElement.volume = 0.0001; // Silent carrier loop keeping background audio channel open
        document.body.appendChild(bgAudioElement);
      }

      if (!outgoingAudioElement) {
        outgoingAudioElement = document.createElement('audio');
        outgoingAudioElement.id = 'diwanOutgoingAudio';
        outgoingAudioElement.setAttribute('playsinline', '');
        outgoingAudioElement.setAttribute('loop', '');
        outgoingAudioElement.setAttribute('preload', 'auto');
        outgoingAudioElement.style.cssText = 'position: fixed; top: -9999px; left: -9999px; width: 1px; height: 1px; opacity: 0.001; pointer-events: none;';
        outgoingAudioElement.src = createStudioTelephoneWav('outgoing');
        outgoingAudioElement.volume = 0.35; // Soft and comfortable in the ear
        document.body.appendChild(outgoingAudioElement);
      }
    }

    function updateBackgroundKeepAliveUI() {
      // Background mode is now fully automated under the hood (Alternative 1: Web Push + Wake Lock)
      // UI button has been removed from header for clean UX.
      const btn = document.getElementById('btnBgKeepAlive');
      if (btn) btn.style.display = 'none';
    }

    function startBackgroundKeepAlive(quiet = true) {
      isBackgroundKeepAliveActive = true;
      try {
        localStorage.setItem('diwan_bg_keepalive', 'true');
      } catch(e) {}
      updateBackgroundKeepAliveUI();
      // Fully automated in background without intrusive toast

      // 2. Try starting audio safely
      try {
        initBackgroundKeepAliveAudio();

        if (bgAudioElement) {
          bgAudioElement.loop = true;
          if (!pendingIncomingCallObj || activeCallRole !== 'callee') {
            bgAudioElement.src = getSilentWavUri();
            bgAudioElement.volume = 0.0001;
          }
          const p = bgAudioElement.play();
          if (p !== undefined) {
            p.then(() => {
              if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                  title: 'ديوان ماركت - وضع العمل المستمر ⚡',
                  artist: currentSupervisor || 'مشرف الصالة',
                  album: 'المزامنة اللحظية والتوجيهات',
                  artwork: [
                    { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
                  ]
                });
                navigator.mediaSession.playbackState = 'playing';
              }
            }).catch(err => {
              console.warn('Background audio start notice (will resume on gesture):', err);
            });
          }
        }
      } catch (e) {
        console.warn('startBackgroundKeepAlive error:', e);
      }
    }

    function stopBackgroundKeepAlive() {
      isBackgroundKeepAliveActive = false;
      localStorage.setItem('diwan_bg_keepalive', 'false');
      if (bgAudioElement) {
        try {
          bgAudioElement.pause();
          bgAudioElement.currentTime = 0;
          bgAudioElement.src = getSilentWavUri();
        } catch (e) {}
      }
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'none';
      }
      updateBackgroundKeepAliveUI();
      showToast('⚪ تم إيقاف وضع الخلفية');
    }

    function toggleBackgroundKeepAlive() {
      if (isBackgroundKeepAliveActive) {
        stopBackgroundKeepAlive();
      } else {
        startBackgroundKeepAlive();
      }
    }

    // Service Worker Call Notification Helpers
    function notifyServiceWorkerIncomingCall(callData) {
      if (!callData) return;
      const thisCallId = callData.callId || callData.id;
      const roleText = callData.callerRole === 'admin' ? '👑 المدير العام' : (callData.callerRole === 'branch_manager' ? '🏢 مدير الفرع' : 'مشرف');

      // 1. Post to active Service Worker controller
      try {
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'INCOMING_CALL',
            callData: {
              callId: thisCallId,
              callerName: callData.callerName || 'الإدارة',
              callerRole: callData.callerRole,
              callerBranch: callData.callerBranch
            }
          });
        }
      } catch (e) {}

      // 2. Direct showNotification via ready Service Worker registration (Android Chrome compatible)
      try {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(reg => {
            if (reg && reg.showNotification) {
              reg.showNotification('📞 مكالمة صوتية واردة الآن!', {
                body: `اتصال إداري مباشر من: ${callData.callerName || 'الإدارة'} (${roleText})`,
                icon: 'apple-touch-icon.png',
                badge: 'apple-touch-icon.png',
                tag: 'incoming_call_' + thisCallId,
                requireInteraction: true,
                renotify: true,
                silent: false,
                vibrate: [1000, 500, 1000, 500, 1000, 500, 1500, 500, 2000, 500, 2000],
                actions: [
                  { action: 'accept_call', title: '📞 رد على المكالمة' },
                  { action: 'reject_call', title: '❌ رفض' }
                ],
                data: {
                  type: 'INCOMING_CALL',
                  callId: thisCallId,
                  callerName: callData.callerName || 'الإدارة',
                  url: './?action=accept_call&callId=' + thisCallId
                }
              }).catch(err => console.warn('reg.showNotification error:', err));
            }
          }).catch(() => {});
        }
      } catch (e) {}
    }

    function dismissServiceWorkerCallNotification(callId) {
      if (!callId) return;
      try {
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'CANCEL_CALL',
            callId: callId
          });
        }
      } catch (e) {}

      try {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(reg => {
            if (reg && reg.getNotifications) {
              reg.getNotifications().then(notifications => {
                notifications.forEach(n => {
                  if (n.tag === ('incoming_call_' + callId) || (n.data && n.data.callId === callId)) {
                    n.close();
                  }
                });
              }).catch(() => {});
            }
          }).catch(() => {});
        }
      } catch (e) {}
    }

    // Google Cloud Messaging (FCM HTTP v1) Dispatcher for Outgoing Voice Calls
    async function dispatchCallFcmPush(targetSupervisorId, callData, targetBranchId) {
      if (!firebaseDb) return;
      try {
        let targetToken = null;
        const devSnap = await firebaseDb.ref('fcm_devices/' + targetSupervisorId).once('value');
        const devVal = devSnap.val();
        if (devVal && devVal.token) {
          targetToken = devVal.token;
        } else if (targetBranchId) {
          const bSnap = await firebaseDb.ref('branches/' + targetBranchId + '/fcm_tokens/' + targetSupervisorId).once('value');
          const bVal = bSnap.val();
          if (bVal && bVal.token) targetToken = bVal.token;
        }

        if (!targetToken) {
          console.log('No registered FCM device token found for supervisor:', targetSupervisorId);
          return;
        }

        console.log('🚀 Dispatching High-Priority Call FCM push to supervisor device...');
        const accessToken = await getGoogleOAuth2AccessToken();
        const roleText = callData.callerRole === 'admin' ? '👑 المدير العام' : (callData.callerRole === 'branch_manager' ? '🏢 مدير الفرع' : 'مشرف');
        const notifTitle = '📞 مكالمة صوتية واردة الآن!';
        const notifBody = `اتصال إداري مباشر من: ${callData.callerName || 'الإدارة'} (${roleText})`;

        const payload = {
          message: {
            token: targetToken,
            data: {
              type: 'INCOMING_CALL',
              callId: String(callData.id || ''),
              callerId: String(callData.callerId || ''),
              callerName: String(callData.callerName || 'الإدارة'),
              callerRole: String(callData.callerRole || ''),
              callerBranch: String(callData.callerBranch || ''),
              url: String(window.location.origin + window.location.pathname + '?action=accept_call&callId=' + callData.id)
            },
            webpush: {
              headers: {
                Urgency: "high"
              },
              notification: {
                title: notifTitle,
                body: notifBody,
                icon: "apple-touch-icon.png",
                badge: "apple-touch-icon.png",
                tag: "incoming_call_" + callData.id,
                requireInteraction: true,
                vibrate: [1000, 500, 1000, 500, 1000, 500, 1500, 500, 2000, 500, 2000],
                actions: [
                  { action: "accept_call", title: "📞 رد على المكالمة" },
                  { action: "reject_call", title: "❌ رفض" }
                ]
              }
            }
          }
        };

        fetch("https://fcm.googleapis.com/v1/projects/diwan-supervisor/messages:send", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + accessToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }).then(res => {
          if (res.ok) console.log('✅ Call FCM Web Push sent successfully to supervisor!');
          else console.warn('Call FCM Web Push HTTP notice:', res.status);
        }).catch(e => console.warn('Call FCM Web Push error:', e));
      } catch (err) {
        console.warn('dispatchCallFcmPush error:', err);
      }
    }

    function initLivePresenceEngine() {
      if (!firebaseDb) return;
      try {
        const connectedRef = firebaseDb.ref('.info/connected');

        connectedRef.on('value', (snap) => {
          const isConnected = (snap.val() === true);

          // Update header live badge in real-time
          const badge = document.getElementById('syncStatusBadge');
          const text = document.getElementById('syncStatusText');
          if (badge && text) {
            if (isConnected) {
              badge.style.background = '#ecfdf5';
              badge.style.color = '#047857';
              badge.style.border = '1px solid #a7f3d0';
              text.innerHTML = 'مزامنة لحظية نشطة 🟢';
            } else {
              badge.style.background = '#fef2f2';
              badge.style.color = '#b91c1c';
              badge.style.border = '1px solid #fecaca';
              text.innerHTML = 'جارٍ الاتصال السحابي ⏳';
            }
          }

          if (isConnected && currentUserId && document.body.classList.contains('auth-passed')) {
            markPresenceOnline();
          }
        });

        // Listen for all users live presence
        firebaseDb.ref('presence').on('value', (snap) => {
          const val = snap.val();
          if (val && typeof val === 'object') {
            handlePresenceStateChange(val);
          }
        });

        // Listen for fcm_devices
        firebaseDb.ref('fcm_devices').on('value', (snap) => {
          const val = snap.val();
          if (val && typeof val === 'object') {
            deviceActivationsCache = val;
            const sModal = document.getElementById('supervisorsModal');
            if (sModal && sModal.classList.contains('open')) {
              renderSupervisorsList();
            }
          }
        });

        // Document tab visibility listener (with Background Keep-Alive support)
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            if (document.body.classList.contains('auth-passed')) {
              markPresenceOnline();
            }
          } else {
            // If background keep-alive is active, keep presence alive even when screen turns off
            if (isBackgroundKeepAliveActive && document.body.classList.contains('auth-passed')) {
              markPresenceOnline();
            } else {
              markPresenceOffline();
            }
          }
        });

        // Pagehide and beforeunload for guaranteed close detection
        window.addEventListener('pagehide', () => {
          markPresenceOffline();
        });

        window.addEventListener('beforeunload', () => {
          markPresenceOffline();
        });

        // Heartbeat pulse every 10 seconds while visible OR when background keep-alive is active
        setInterval(() => {
          const shouldPulse = (document.visibilityState === 'visible' || isBackgroundKeepAliveActive);
          if (firebaseDb && currentUserId && shouldPulse && document.body.classList.contains('auth-passed')) {
            firebaseDb.ref('presence/' + currentUserId).update({
              online: true,
              lastSeen: firebase.database.ServerValue.TIMESTAMP
            }).catch(() => {});
          }
        }, 10000);

        // Periodic live presence strip pulse every 2 seconds for fresh relative times
        if (managerPresenceLiveInterval) clearInterval(managerPresenceLiveInterval);
        managerPresenceLiveInterval = setInterval(() => {
          if (currentUserRole === 'admin' || currentUserRole === 'branch_manager') {
            updateManagerLivePresenceStrip();
          }
        }, 2000);

      } catch (err) {
        console.warn('initLivePresenceEngine warning:', err);
      }
    }

    function initDeviceActivationsTracker() {
      initLivePresenceEngine();
    }

        function renderSupervisorsList() {
      const container = document.getElementById('supervisorsListContainer');
      let list = getSupervisorsList();

      // If branch_manager, only show floor supervisors belonging to this branch (hide admin accounts)
      if (currentUserRole === 'branch_manager') {
        list = list.filter(s => s.branchId === currentBranchId && s.id !== 'admin' && s.role !== 'admin');
      }

      const totalCount = list.length;
      const onlineCount = list.filter(s => isUserReallyOnline(s.id)).length;
      const pushCount = list.filter(s => {
        const dev = deviceActivationsCache[s.id];
        return dev && (dev.notificationPermission === 'granted' || !!dev.token);
      }).length;

      const summaryBar = `
        <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="pulse-dot" style="width: 10px; height: 10px; background: #10b981; border-radius: 50%; box-shadow: 0 0 0 3px rgba(16,185,129,0.3);"></span>
            <span style="font-size: 13px; font-weight: 800; color: #166534;">
              رصد المزامنة اللحظية (Live Presence):
              <strong style="color: #059669; font-size: 14px;">${onlineCount}</strong> متصلون الآن لحظياً من أصل <strong>${totalCount}</strong>
            </span>
          </div>
          <div style="font-size: 11.5px; color: #166534; font-weight: 700; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <span>🔔 ${pushCount} مفعلون للتنبيهات</span>
            <span style="background: #dcfce7; padding: 2px 8px; border-radius: 999px; border: 1px solid #bbf7d0;">⚡ متزامن بالثانية</span>
          </div>
        </div>
      `;

      container.innerHTML = summaryBar + list.map(s => {
        const isAdmin = (s.role === 'admin');
        const isBranchMgr = (s.role === 'branch_manager');
        const branchName = s.branchId === 'all' ? 'جميع الفروع 🌐' : (getBranchById(s.branchId) ? getBranchById(s.branchId).nameAr : s.branchId);

        let roleBadge = '<span style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">👤 مسؤول صالة</span>';
        if (isAdmin) {
          roleBadge = '<span style="background: #fdf4ff; color: #a855f7; border: 1px solid #d8b4fe; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">👑 مدير عام</span>';
        } else if (isBranchMgr) {
          roleBadge = '<span style="background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">🏢 مدير فرع</span>';
        }

        const pres = livePresenceCache[s.id];
        const dev = deviceActivationsCache[s.id];
        const isOnline = isUserReallyOnline(s.id);
        const lastSeen = pres ? pres.lastSeen : (dev ? (dev.lastActive || dev.updatedAt) : null);
        const statusText = formatLivePresenceTime(lastSeen, isOnline);
        const platStr = (pres && pres.platform) || (dev && dev.platform) || '';
        const isPushActive = dev && (dev.notificationPermission === 'granted' || !!dev.token);

        let liveBadge = '';
        if (isOnline) {
          liveBadge = `
            <span style="background: #ecfdf5; color: #047857; border: 1.5px solid #6ee7b7; font-size: 11.5px; font-weight: 800; padding: 3px 10px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 0 10px rgba(16,185,129,0.3);">
              <span class="pulse-dot" style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
              🟢 متصل لحظياً الآن ${platStr ? `(${escapeHtml(platStr)})` : ''}
              ${(currentUserRole === 'admin' || (currentUserRole === 'branch_manager' && s.branchId === currentBranchId)) && s.id !== currentUserId ? `
                <button type="button" onclick="event.stopPropagation(); closeSupervisorsModal(); initiateVoiceCall('${escapeHtml(s.id)}');" style="background: #059669; color: white; border: none; border-radius: 999px; padding: 2px 9px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; margin-right: 6px; cursor: pointer; box-shadow: 0 1px 3px rgba(5,150,105,0.3);" title="اتصال هاتفي مباشر">
                  📞 اتصال
                </button>
              ` : ''}
              ${isPushActive ? '<span style="background: #a7f3d0; color: #065f46; font-size: 10px; padding: 1px 6px; border-radius: 4px;">🔔 الإشعارات نشطة</span>' : ''}
            </span>
          `;
        } else if (lastSeen) {
          liveBadge = `
            <span style="background: #f8fafc; color: #475569; border: 1px solid #cbd5e1; font-size: 11px; font-weight: 700; padding: 2.5px 8px; border-radius: 999px; display: inline-flex; align-items: center; gap: 5px;">
              <span style="width: 7px; height: 7px; background: #94a3b8; border-radius: 50%; display: inline-block;"></span>
              ${escapeHtml(statusText)} ${platStr ? `• ${escapeHtml(platStr)}` : ''}
              ${isPushActive ? '<span style="background: #e2e8f0; color: #334155; font-size: 9.5px; padding: 1px 4px; border-radius: 4px;">🔔 مفعّل</span>' : ''}
            </span>
          `;
        } else {
          liveBadge = `
            <span style="background: #f1f5f9; color: #94a3b8; border: 1px solid #e2e8f0; font-size: 11px; font-weight: 600; padding: 2.5px 8px; border-radius: 999px; display: inline-flex; align-items: center; gap: 5px;">
              <span style="width: 7px; height: 7px; background: #cbd5e1; border-radius: 50%; display: inline-block;"></span>
              ⚪ لم يدخل التطبيق بعد
            </span>
          `;
        }

        // Branch manager cannot edit or delete general manager or other branch managers
        const canEdit = (currentUserRole === 'admin') || (!isAdmin && !isBranchMgr);
        const canDelete = !isAdmin && (currentUserRole === 'admin' || !isBranchMgr);

        return `
          <div style="background: white; border: 1.5px solid ${isOnline ? '#a7f3d0' : 'var(--border)'}; border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm); flex-wrap: wrap; gap: 8px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 5px;">
                <strong style="font-size: 14px; color: var(--secondary);">${escapeHtml(s.name)}</strong>
                ${roleBadge}
                <span style="background: #f1f5f9; color: var(--text-muted); font-size: 11px; padding: 2px 6px; border-radius: 4px;">📍 ${escapeHtml(branchName)}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                ${liveBadge}
              </div>
            </div>
            <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
              ${((currentUserRole === 'admin' && s.id !== currentUserId && s.id !== 'admin' && s.role !== 'admin') ||
                 (currentUserRole === 'branch_manager' && s.branchId === currentBranchId && s.id !== currentUserId && s.role !== 'admin' && s.id !== 'admin' && s.role !== 'branch_manager')) ? `
                <button type="button" class="btn btn-sm" style="padding: 4px 10px; font-size: 12px; font-weight: 800; background: ${isOnline ? '#10b981' : '#059669'}; color: white; border: none; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 1px 3px rgba(16,185,129,0.3);" onclick="event.stopPropagation(); closeSupervisorsModal(); initiateVoiceCall('${escapeHtml(s.id)}')">
                  📞 اتصال
                </button>
              ` : ''}
              ${canEdit ? `
                <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px;" onclick="openEditSupervisorForm('${escapeHtml(s.id)}')">
                  ✏️ تعديل
                </button>
              ` : ''}
              ${canDelete ? `
                <button type="button" class="btn btn-outline-white btn-sm" style="padding: 4px 8px; font-size: 12px; color: #dc2626; border-color: #fca5a5;" onclick="deleteSupervisor('${escapeHtml(s.id)}')">
                  🗑️ حذف
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    function showAddSupervisorForm() {
      populateSupervisorBranchSelect();
      const b = getBranchById(currentBranchId);
      document.getElementById('supervisorFormTitle').innerText = (currentUserRole === 'branch_manager')
        ? `➕ إضافة مسؤول صالة لفرع (${b ? b.nameAr : ''})`
        : '➕ إضافة مسؤول صالة أو مدير فرع جديد';
      document.getElementById('editSupervisorId').value = '';
      document.getElementById('inputSupervisorName').value = '';
      const roleInput = document.getElementById('inputSupervisorRole');
      if (roleInput) {
        roleInput.value = 'supervisor';
        roleInput.disabled = (currentUserRole === 'branch_manager');
      }
      const branchInput = document.getElementById('inputSupervisorBranch');
      if (branchInput) {
        branchInput.value = (currentUserRole === 'branch_manager') ? currentBranchId : 'all';
        branchInput.disabled = (currentUserRole === 'branch_manager');
      }
      document.getElementById('inputSupervisorPin').value = '';
      document.getElementById('inputSupervisorPinConfirm').value = '';
      document.getElementById('labelSupervisorPin').innerText = 'رمز PIN (4 أرقام):';
      document.getElementById('supervisorFormError').innerText = '';
      const formContainer = document.getElementById('supervisorFormContainer');
      formContainer.style.display = 'block';
      document.getElementById('btnShowAddSupervisor').style.display = 'none';
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      document.getElementById('inputSupervisorName').focus();
    }

    function openEditSupervisorForm(id) {
      const list = getSupervisorsList();
      const sup = list.find(s => s.id === id);
      if (!sup) return;

      if (currentUserRole === 'branch_manager') {
        if (sup.branchId !== currentBranchId || sup.role !== 'supervisor') {
          alert("عذراً، يحق لك فقط تعديل مسؤولي الصالة التابعين لفرعك.");
          return;
        }
      }

      populateSupervisorBranchSelect();
      document.getElementById('supervisorFormTitle').innerText = '✏️ تعديل بيانات: ' + sup.name;
      const branchInput = document.getElementById('inputSupervisorBranch');
      if (branchInput) {
        branchInput.value = sup.branchId || 'all';
        branchInput.disabled = (sup.id === 'admin' || currentUserRole === 'branch_manager');
      }
      const roleInput = document.getElementById('inputSupervisorRole');
      if (roleInput) {
        roleInput.value = sup.role || 'supervisor';
        roleInput.disabled = (sup.id === 'admin' || currentUserRole === 'branch_manager');
      }
      document.getElementById('editSupervisorId').value = sup.id;
      document.getElementById('inputSupervisorName').value = sup.name;
      document.getElementById('inputSupervisorPin').value = '';
      document.getElementById('inputSupervisorPinConfirm').value = '';
      document.getElementById('labelSupervisorPin').innerText = 'رمز PIN الجديد (اتركه فارغاً للإبقاء على الرمز الحالي):';
      document.getElementById('supervisorFormError').innerText = '';
      const formContainer = document.getElementById('supervisorFormContainer');
      formContainer.style.display = 'block';
      document.getElementById('btnShowAddSupervisor').style.display = 'none';
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      document.getElementById('inputSupervisorName').focus();
    }

    function cancelSupervisorForm() {
      const formContainer = document.getElementById('supervisorFormContainer');
      formContainer.style.display = 'none';
      document.getElementById('btnShowAddSupervisor').style.display = 'block';
      document.getElementById('supervisorFormError').innerText = '';
      const branchInput = document.getElementById('inputSupervisorBranch');
      if (branchInput) branchInput.disabled = false;
      const roleInput = document.getElementById('inputSupervisorRole');
      if (roleInput) roleInput.disabled = false;
    }

    async function saveSupervisorForm() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة فقط.");
        return;
      }
      const id = document.getElementById('editSupervisorId').value;
      const name = document.getElementById('inputSupervisorName').value.trim();
      const pin = document.getElementById('inputSupervisorPin').value.trim();
      const confirmPin = document.getElementById('inputSupervisorPinConfirm').value.trim();
      const branchInput = document.getElementById('inputSupervisorBranch');
      let branchId = branchInput ? branchInput.value : 'all';
      const roleInput = document.getElementById('inputSupervisorRole');
      let role = (roleInput && roleInput.value) ? roleInput.value : 'supervisor';
      const errBox = document.getElementById('supervisorFormError');

      // Strict security: Branch Managers can ONLY add/edit floor supervisors to their own branch
      if (currentUserRole === 'branch_manager') {
        const curList = getSupervisorsList();
        if (id) {
          const targetSup = curList.find(s => s.id === id);
          if (targetSup && (targetSup.role === 'admin' || targetSup.role === 'branch_manager' || targetSup.branchId !== currentBranchId)) {
            errBox.innerText = 'عذراً، يمكن لمدير الفرع تعديل مسؤولي صالة فرعه فقط.';
            return;
          }
        }
        branchId = currentBranchId;
        role = 'supervisor';
      }

      // General Manager (admin) account locks
      if (id === 'admin') {
        role = 'admin';
        branchId = 'all';
      }

      if (!name) {
        errBox.innerText = 'يرجى إدخال اسم المشرف.';
        return;
      }

      let list = [...getSupervisorsList()];

      if (!id) {
        // ADD NEW SUPERVISOR
        if (!pin || pin.length !== APP_CONFIG.PIN_LENGTH || !/^[0-9]{4}$/.test(pin)) {
          errBox.innerText = `يرجى إدخال رمز PIN مكون من ${APP_CONFIG.PIN_LENGTH} أرقام عددية.`;
          return;
        }
        if (pin !== confirmPin) {
          errBox.innerText = 'رمز PIN وتأكيد الرمز غير متطابقين.';
          return;
        }

        // Generate salt for cryptographic security (C10)
        const salt = Math.random().toString(36).substring(2, 10);
        const hash = await computeHash(pin, salt);
        const newId = 'sup_' + Date.now();
        list.push({
          id: newId,
          name: name,
          role: role,
          branchId: branchId,
          salt: salt,
          pinHash: hash
        });

        saveSupervisorsList(list);
        cancelSupervisorForm();
        renderSupervisorsList();
        showToast("✅ تمت إضافة المشرف بنجاح!");
      } else {
        // EDIT EXISTING SUPERVISOR
        const idx = list.findIndex(s => s.id === id);
        if (idx === -1) return;

        const oldName = list[idx].name;
        list[idx].name = name;
        if (id === 'admin') {
          list[idx].role = 'admin';
          list[idx].branchId = 'all';
        } else {
          list[idx].branchId = branchId;
          if (role) list[idx].role = role;
        }

        // If PIN was entered, update it with salt
        if (pin) {
          if (pin.length !== APP_CONFIG.PIN_LENGTH || !/^[0-9]{4}$/.test(pin)) {
            errBox.innerText = `رمز PIN يجب أن يتكون من ${APP_CONFIG.PIN_LENGTH} أرقام عددية.`;
            return;
          }
          if (pin !== confirmPin) {
            errBox.innerText = 'رمز PIN وتأكيد الرمز غير متطابقين.';
            return;
          }
          const salt = Math.random().toString(36).substring(2, 10);
          list[idx].salt = salt;
          list[idx].pinHash = await computeHash(pin, salt);
        }

        // Live display sync: If the user edited their own active account, update currentSupervisor display immediately
        if (currentSupervisor === oldName || (typeof currentUserId !== 'undefined' && currentUserId === id) || (currentUserRole === 'admin' && id === 'admin')) {
          currentSupervisor = name;
          const activeDisplay = document.getElementById('activeSupervisorDisplay');
          if (activeDisplay) activeDisplay.innerText = name;
          const execUserPill = document.getElementById('adminExecutiveUserPill') || document.querySelector('.admin-user-pill');
          if (execUserPill && (id === 'admin' || currentUserRole === 'admin')) {
            execUserPill.innerText = name;
          }
        }

        saveSupervisorsList(list);
        cancelSupervisorForm();
        renderSupervisorsList();
        showToast("✅ تم تحديث بيانات المشرف بنجاح!");
      }
    }

    function deleteSupervisor(id) {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، هذه الصلاحية مخصصة للإدارة فقط.");
        return;
      }
      let list = getSupervisorsList();
      const sup = list.find(s => s.id === id);
      if (!sup) {
        alert("المشرف المحدد غير موجود!");
        return;
      }

      if (sup.role === 'admin' || sup.id === 'admin') {
        alert("لا يمكن حذف حساب المدير العام الرئيسي!");
        return;
      }

      if (currentUserRole === 'branch_manager' && (sup.branchId !== currentBranchId || sup.role !== 'supervisor')) {
        alert("عذراً، يمكن لمدير الفرع حذف مسؤولي صالة فرعه فقط.");
        return;
      }

      if (!confirm(`هل أنت متأكد من حذف "${sup.name}" من النظام نهائياً؟\nلن يتمكن بعد الآن من الدخول للنظام.`)) {
        return;
      }

      list = list.filter(s => s.id !== id);
      saveSupervisorsList(list);
      renderSupervisorsList();
      showToast("🗑️ تم حذف (" + sup.name + ") بنجاح!");
    }

    function resetSupervisorsToDefault() {
      if (currentUserRole !== 'admin') {
        alert("هذه الصلاحية مخصصة للمدير العام فقط.");
        return;
      }
      if (!confirm("هل أنت متأكد من استعادة القائمة الافتراضية للمشرفين ومديري الفروع؟\nسيتم استرجاع الحسابات والرموز الأساسية.")) {
        return;
      }
      saveSupervisorsList(DEFAULT_SUPERVISORS);
      renderSupervisorsList();
      showToast("🔄 تمت استعادة قائمة المشرفين والمديرين الافتراضية بنجاح!");
    }

    /* ============================================================
       MULTI-BRANCH CONTROLS & HQ DASHBOARD (ADMIN)
       ============================================================ */
        function populateExecutiveBranchSelect() {
      const sel = document.getElementById('executiveBranchSelect');
      if (!sel) return;
      const branches = getBranchesList();
      sel.innerHTML = branches.map(b => `<option value="${b.id}">${b.nameAr} (${b.location})</option>`).join('');
      sel.value = currentBranchId;
    }

    function populateHeaderBranchSelect() {
      const sel = document.getElementById('headerBranchSelect');
      if (!sel) return;
      const branches = getBranchesList();
      sel.innerHTML = branches.map(b => `<option value="${b.id}">${b.nameAr}</option>`).join('');
      sel.value = currentBranchId;
    }

    function onAdminSwitchBranch(newBranchId) {
      if (currentUserRole !== 'admin') {
        alert("عذراً، الانتقال بين الفروع مخصص للمدير العام فقط.");
        return;
      }
      currentBranchId = newBranchId;
      updateBranchUI();
      loadStateForCurrentShift();
      if (firebaseDb) {
        listenToFirebaseShift();
        listenToFirebaseTempRanges();
      }
      renderAll();
      const b = getBranchById(currentBranchId);
      listenToBranchDirectives();
      showToast("🏢 تم الانتقال إلى: " + b.nameAr);
    }

    function updateBranchUI() {
      populateShiftSelect(currentBranchId);
      const b = getBranchById(currentBranchId);
      const titleAr = document.getElementById('brandBranchTitleAr');
      const titleEn = document.getElementById('brandBranchTitleEn');
      const activeBranchDisplay = document.getElementById('activeBranchDisplay');
      const printBranchTitle = document.getElementById('printBranchTitle');
      const headerSelect = document.getElementById('headerBranchSelect');

      if (titleAr) titleAr.innerText = b.nameAr;
      if (titleEn) titleEn.innerText = 'Diwan Market – ' + b.nameEn;
      if (activeBranchDisplay) activeBranchDisplay.innerText = b.nameAr;
      if (printBranchTitle) printBranchTitle.innerText = 'ديوان ماركت – ' + b.nameAr;
      if (headerSelect) headerSelect.value = currentBranchId;
      populateExecutiveBranchSelect();
      document.title = 'ديوان ماركت – ' + b.nameAr + ' | نظام متابعة الصالة';
      if (typeof updateManagerLivePresenceStrip === 'function') {
        updateManagerLivePresenceStrip();
      }
    }

    function openHqOverviewModal() {
      document.body.classList.add('modal-open');
      if (currentUserRole !== 'admin') return;
      renderHqBranchesGrid();
      document.getElementById('hqOverviewModal').classList.add('open');
    }

    let hqFirebaseListeners = [];

    function closeHqOverviewModal() {
      document.getElementById('hqOverviewModal').classList.remove('open');
      document.body.classList.remove('modal-open');
      if (hqFirebaseListeners && hqFirebaseListeners.length > 0) {
        hqFirebaseListeners.forEach(l => {
          try { l.ref.off('value', l.callback); } catch (e) {}
        });
        hqFirebaseListeners = [];
      }
    }

    function renderHqBranchCardHtml(b, s, isCurrent, isCloud, hasData) {
      const pct = s.percentage;
      return `
        <div id="hqCard_${b.id}" style="background: white; border: 2px solid ${isCurrent ? 'var(--primary)' : 'var(--border)'}; border-radius: 12px; padding: 14px; position: relative; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <div>
              <h4 style="font-size: 15px; font-weight: 800; color: var(--secondary);">${escapeHtml(b.nameAr)}</h4>
              <span style="font-size: 11px; color: var(--text-muted);">📍 ${escapeHtml(b.location)}${isCloud ? ' (محدّث سحابياً ☁️)' : ''}</span>
            </div>
            ${isCurrent ? '<span style="background: var(--primary-light); color: var(--primary-dark); font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 999px;">الفرع النشط حالياً</span>' : ''}
          </div>

          <div style="margin: 10px 0;">
            <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 4px;">
              <span>نسبة الإنجاز اليوم:</span>
              <span style="color: ${pct > 70 ? 'var(--primary)' : (pct > 0 ? 'var(--warning)' : '#64748b')};">${hasData ? pct + '%' : 'لم يبدأ بعد ⏳'}</span>
            </div>
            <div style="background: #e2e8f0; height: 8px; border-radius: 999px; overflow: hidden;">
              <div style="background: var(--primary); height: 100%; width: ${pct}%;"></div>
            </div>
          </div>

          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; display: flex; justify-content: space-between;">
            <span>✅ ${s.done} مكتمل</span>
            <span>🔄 ${s.inProgress} قيد العمل</span>
            <span style="color: ${s.critical > 0 ? '#ef4444' : 'inherit'}; font-weight: ${s.critical > 0 ? '800' : 'normal'};">🚨 ${s.critical} عطل</span>
          </div>

          <button type="button" class="btn btn-outline-white btn-sm" style="width: 100%; justify-content: center; font-weight: 800; ${isCurrent ? 'opacity: 0.5; pointer-events: none;' : 'color: var(--primary-dark); border-color: var(--primary);'}" onclick="onAdminSwitchBranch('${b.id}'); closeHqOverviewModal();">
            ${isCurrent ? 'أنت تتصفح هذا الفرع الآن' : 'الانتقال ومتابعة هذا الفرع ➔'}
          </button>
        </div>
      `;
    }

    function renderHqBranchesGrid() {
      const grid = document.getElementById('hqBranchesGrid');
      if (!grid) return;
      const branches = getBranchesList();

      // 1. Initial render from local cache / active branch state
      grid.innerHTML = branches.map(b => {
        let branchItems = null;
        if (b.id === currentBranchId && state && state.items) {
          branchItems = state.items;
        } else {
          const opsKey = 'diwan_day_ops_' + b.id + '_' + currentDate;
          const legacyKey = STORAGE_KEYS.SHIFT_PREFIX + b.id + '_' + currentDate + '_' + currentShiftType;
          const savedData = safeGetItem(opsKey) || safeGetItem(legacyKey);
          if (savedData) {
            const parsed = safeJsonParse(savedData);
            if (parsed && parsed.items) {
              branchItems = parsed.items;
            }
          }
        }

        const branchItemTotal = getBranchTotalItems(b.id);
        let s = { done: 0, inProgress: 0, handover: 0, critical: 0, total: branchItemTotal, percentage: 0 };
        let hasData = false;

        if (branchItems) {
          s = calculateStats(branchItems, currentShiftType);
          if (s.done === 0 && s.percentage === 0) {
            let dayDone = 0;
            Object.values(branchItems).forEach(it => {
              if (it && (it.morning?.status === 'done' || it.evening?.status === 'done' || it.night?.status === 'done')) dayDone++;
            });
            if (dayDone > 0) {
              s.done = dayDone;
              s.percentage = branchItemTotal > 0 ? Math.round((dayDone / branchItemTotal) * 100) : 0;
            }
          }
          if (s.done > 0 || s.inProgress > 0 || s.critical > 0) {
            hasData = true;
          }
        }

        const isCurrent = b.id === currentBranchId;
        return renderHqBranchCardHtml(b, s, isCurrent, false, hasData);
      }).join('');

      // 2. Live Realtime Streaming from Firebase (WebSockets Multi-shift daily_ops)
      if (firebaseDb) {
        // Detach prior listeners if re-rendering while open
        if (hqFirebaseListeners && hqFirebaseListeners.length > 0) {
          hqFirebaseListeners.forEach(l => {
            try { l.ref.off('value', l.callback); } catch (e) {}
          });
          hqFirebaseListeners = [];
        }

        branches.forEach(b => {
          const path = 'branches/' + b.id + '/daily_ops/' + currentDate;
          const ref = firebaseDb.ref(path);
          const callback = ref.on('value', snapshot => {
            const rawCloudVal = snapshot.val();
            if (rawCloudVal) {
              const cloudVal = typeof deserializeStateFromFirebase === 'function'
                ? deserializeStateFromFirebase(rawCloudVal)
                : rawCloudVal;
              if (cloudVal && cloudVal.items) {
                let s = calculateStats(cloudVal.items, currentShiftType);
                if (s.done === 0 && s.percentage === 0) {
                  let dayDone = 0;
                  Object.values(cloudVal.items).forEach(it => {
                    if (it && (it.morning?.status === 'done' || it.evening?.status === 'done' || it.night?.status === 'done')) dayDone++;
                  });
                  if (dayDone > 0) {
                    s.done = dayDone;
                    s.percentage = branchItemTotal > 0 ? Math.round((dayDone / branchItemTotal) * 100) : 0;
                  }
                }
                const hasData = (s.done > 0 || s.inProgress > 0 || s.critical > 0);
                const card = document.getElementById('hqCard_' + b.id);
                if (card) {
                  const isCurrent = b.id === currentBranchId;
                  card.outerHTML = renderHqBranchCardHtml(b, s, isCurrent, true, hasData);
                }
              }
            }
          }, err => console.warn('HQ live listen failed for branch', b.id, err));

          hqFirebaseListeners.push({ ref, callback });
        });
      }
    }

    // Close modal when clicking backdrop (H7)
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('open');
            document.body.classList.remove('modal-open');
          }
        });
      });
    });

    // Close BroadcastChannel cleanly on window unload (L6)
    window.addEventListener('beforeunload', () => {
      if (broadcastChannel) {
        try { broadcastChannel.close(); } catch (e) {}
      }
    });

    /* ============================================================
       REALTIME DIRECTIVES & MOBILE NOTIFICATIONS ENGINE (TEXT & VOICE)
       ============================================================ */
    let directiveMediaRecorder = null;
    let directiveAudioChunks = [];
    let directiveAudioBase64 = null;
    let directiveAudioDuration = 0;
    let directiveRecordTimer = null;
    let directiveRecordSeconds = 0;
    let alertedDirectiveIds = new Set(safeJsonParse(safeGetItem('diwan_alerted_directives'), []));
    let branchDirectivesRef = null;
    let branchDirectivesCallback = null;

    // Web Audio API chime tone (Synthesized two-tone alert)
    function playDirectiveChime() {
      try {
        if (typeof enableBackgroundSyncKeepAlive === 'function') enableBackgroundSyncKeepAlive();
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        const now = ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(784, now); // G5
        osc.frequency.setValueAtTime(1046.5, now + 0.14); // C6
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } catch (e) {
        console.warn("Chime audio note failed:", e);
      }
    }

    // Notification Permission Management & Banner
    function checkNotificationPermissionBanner() {
      const banner = document.getElementById('notifPermissionBanner');
      if (!banner) return;
      if ('Notification' in window && Notification.permission === 'granted') {
        banner.style.display = 'none';
      } else if ('Notification' in window && Notification.permission === 'default') {
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    }

    function requestNotificationPermissionPrompt(userTriggered = true) {
      if (!('Notification' in window)) {
        if (userTriggered) alert("المتصفح الحالي لا يدعم إشعارات النظام.");
        return;
      }
      if (Notification.permission === 'default') {
        Notification.requestPermission().then(perm => {
          checkNotificationPermissionBanner();
          requestScreenWakeLock("floor_monitoring");
          if (perm === 'granted') {
            showToast("🔔 تم تفعيل إشعارات الهاتف بنجاح!");
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.ready.then(reg => {
                reg.showNotification("✅ تم تفعيل التنبيهات بنجاح", {
                  body: "ستصلك الآن تنبيهات التوجيهات الإدارية والملاحظات فور ورودها.",
                  icon: 'apple-touch-icon.png',
                  badge: 'apple-touch-icon.png',
                  vibrate: [200, 100, 200]
                });
              }).catch(e => {});
            }
            if (typeof registerFcmDeviceToken === 'function') {
              registerFcmDeviceToken();
            }
          }
        });
      } else if (userTriggered && Notification.permission === 'denied') {
        alert("إشعارات الهاتف مقفلة من إعدادات المتصفح. يرجى الضغط على أيقونة القفل 🔒 بجانب رابط الموقع في المتصفح وتفعيل 'الإشعارات' لتصلك التنبيهات فوراً.");
      }
    }

    // Background Audio & Process Keep-Alive Engine
    let keepAliveContext = null;
    let keepAliveGain = null;
    let keepAliveOsc = null;

    function enableBackgroundSyncKeepAlive() {
      // Clean keep-alive delegated entirely to HTML5 studio audio element (zero speaker buzzing or drone)
      if (typeof startBackgroundKeepAlive === 'function') {
        startBackgroundKeepAlive();
      }
    }

    // Instant Mobile Phone Notification (Background Service Worker + Native Web Notification) & Haptic Vibration
    function triggerDirectiveAlert(directive) {
      if (!directive || !directive.id) return;
      if (alertedDirectiveIds.has(directive.id)) return;
      alertedDirectiveIds.add(directive.id);
      safeSetItem('diwan_alerted_directives', JSON.stringify(Array.from(alertedDirectiveIds).slice(-50)));

      // Play synthesized audio tone
      playDirectiveChime();

      // Trigger phone vibration (Android / supported devices)
      if ('vibrate' in navigator) {
        try { navigator.vibrate([300, 150, 300, 150, 300]); } catch (e) {}
      }

      const sender = directive.senderName || 'الإدارة العامة';
      const pLabel = directive.priority === 'urgent' ? '🚨 [عاجل جداً]' : (directive.priority === 'important' ? '⚠️ [هام]' : '📢 [توجيه]');
      const bodyText = directive.text ? directive.text.substring(0, 100) : 'ملاحظة صوتية إدارية جديدة 🎙️';
      const notifTitle = `${pLabel} توجيه إداري من: ${sender}`;
      const notifOptions = {
        body: bodyText,
        icon: 'apple-touch-icon.png',
        badge: 'apple-touch-icon.png',
        tag: 'dir_' + directive.id,
        renotify: false,
        vibrate: [300, 150, 300, 150, 300],
        requireInteraction: true,
        data: { url: window.location.href }
      };

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
          return reg.showNotification(notifTitle, notifOptions);
        }).catch(err => {
          if ('Notification' in window && Notification.permission === 'granted') {
            try { new Notification(notifTitle, notifOptions); } catch (nErr) {}
          }
        });
      } else if ('Notification' in window && Notification.permission === 'granted') {
        try {
          new Notification(notifTitle, notifOptions);
        } catch (e) {
          console.warn("Notification constructor failed:", e);
        }
      }
    }

    // Wakeup & Reconnection Engine: Re-establish Realtime listeners when phone screen turns on
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (firebaseDb) {
          try { firebaseDb.goOnline(); } catch (e) {}
        }
        listenToBranchDirectives();
        if (typeof loadStateForCurrentShift === 'function') {
          loadStateForCurrentShift();
        }
      }
    });

    window.addEventListener('focus', () => {
      if (firebaseDb) {
        try { firebaseDb.goOnline(); } catch (e) {}
      }
      listenToBranchDirectives();
    });

    // Voice recording functions
    async function startDirectiveAudioRecording() {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          alert("متصفحك لا يدعم تسجيل الصوت المباشر.");
          return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        directiveAudioChunks = [];
        directiveAudioBase64 = null;
        
        let mimeType = 'audio/webm';
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
          mimeType = 'audio/webm;codecs=opus';
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          mimeType = 'audio/mp4';
        } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
          mimeType = 'audio/ogg';
        }

        directiveMediaRecorder = new MediaRecorder(stream, { mimeType });
        directiveMediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) directiveAudioChunks.push(e.data);
        };
        directiveMediaRecorder.onstop = () => {
          const audioBlob = new Blob(directiveAudioChunks, { type: mimeType });
          const reader = new FileReader();
          reader.onloadend = () => {
            directiveAudioBase64 = reader.result;
            directiveAudioDuration = directiveRecordSeconds;
            const previewAudio = document.getElementById('directiveAudioPreview');
            const previewContainer = document.getElementById('directiveAudioPreviewContainer');
            if (previewAudio && previewContainer) {
              previewAudio.src = directiveAudioBase64;
              previewContainer.style.display = 'block';
            }
          };
          reader.readAsDataURL(audioBlob);
          stream.getTracks().forEach(t => t.stop());
        };

        directiveMediaRecorder.start(250);
        directiveRecordSeconds = 0;
        updateDirectiveRecordUi(true);

        directiveRecordTimer = setInterval(() => {
          directiveRecordSeconds++;
          const secStr = String(directiveRecordSeconds % 60).padStart(2, '0');
          const minStr = String(Math.floor(directiveRecordSeconds / 60)).padStart(2, '0');
          const timerEl = document.getElementById('directiveRecordTimer');
          if (timerEl) timerEl.innerText = `${minStr}:${secStr}`;
          if (directiveRecordSeconds >= 90) { // Max 90s limit
            stopDirectiveAudioRecording();
          }
        }, 1000);
      } catch (err) {
        console.error('Audio record error:', err);
        alert("يرجى إعطاء صلاحية الميكروفون للموقع من إعدادات المتصفح لتتمكن من تسجيل الملاحظة الصوتية.");
      }
    }

    function stopDirectiveAudioRecording() {
      if (directiveRecordTimer) {
        clearInterval(directiveRecordTimer);
        directiveRecordTimer = null;
      }
      if (directiveMediaRecorder && directiveMediaRecorder.state === 'recording') {
        directiveMediaRecorder.stop();
      }
      updateDirectiveRecordUi(false);
    }

    function cancelDirectiveAudioRecording() {
      if (directiveRecordTimer) {
        clearInterval(directiveRecordTimer);
        directiveRecordTimer = null;
      }
      if (directiveMediaRecorder && directiveMediaRecorder.state === 'recording') {
        directiveMediaRecorder.stop();
      }
      directiveAudioBase64 = null;
      directiveAudioChunks = [];
      directiveRecordSeconds = 0;
      updateDirectiveRecordUi(false);
      const previewContainer = document.getElementById('directiveAudioPreviewContainer');
      const previewAudio = document.getElementById('directiveAudioPreview');
      if (previewAudio) previewAudio.src = '';
      if (previewContainer) previewContainer.style.display = 'none';
    }

    function updateDirectiveRecordUi(isRecording) {
      const btnStart = document.getElementById('btnStartRecord');
      const btnStop = document.getElementById('btnStopRecord');
      const btnCancel = document.getElementById('btnCancelRecord');
      const timerEl = document.getElementById('directiveRecordTimer');
      const statusEl = document.getElementById('directiveRecordStatus');

      if (isRecording) {
        if (btnStart) btnStart.style.display = 'none';
        if (btnStop) btnStop.style.display = 'inline-flex';
        if (btnCancel) btnCancel.style.display = 'inline-flex';
        if (timerEl) {
          timerEl.style.display = 'inline-block';
          timerEl.innerText = '00:00';
        }
        if (statusEl) {
          statusEl.innerText = '🔴 جارٍ التسجيل الآن...';
          statusEl.style.color = '#b91c1c';
          statusEl.style.fontWeight = '700';
        }
      } else {
        if (btnStart) btnStart.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'none';
        if (btnCancel) btnCancel.style.display = 'none';
        if (timerEl) timerEl.style.display = 'none';
        if (statusEl) {
          statusEl.innerText = directiveAudioBase64 ? '🎙️ يوجد تسجيل صوتي' : 'اختياري';
          statusEl.style.color = directiveAudioBase64 ? '#059669' : 'var(--text-muted)';
        }
      }
    }

    // Modal UI & Dropdown management
    
    /* ============================================================
       DIRECT VOICE CALL DIRECTORY & CALL LOGS MODAL CONTROLLERS
       ============================================================ */
    let currentCallModalTab = 'directory';

    function openDirectCallModal() {
      // Strict Top-Down Permission Check
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، خاصية الاتصال الصوتي مخصصة للإدارة ومديري الفروع للتواصل مع مسؤولي الصالة (من الأعلى للأدنى).");
        return;
      }
      document.body.classList.add('modal-open');
      switchDirectCallTab('directory');
      const modal = document.getElementById('directCallModal');
      if (modal) modal.classList.add('open');
    }

    function closeDirectCallModal() {
      const modal = document.getElementById('directCallModal');
      if (modal) modal.classList.remove('open');
      if (!document.querySelector('.modal-overlay.open')) {
        document.body.classList.remove('modal-open');
      }
    }

    function switchDirectCallTab(tab) {
      currentCallModalTab = tab;
      const tabDirBtn = document.getElementById('tabCallDirectoryBtn');
      const tabLogsBtn = document.getElementById('tabCallLogsBtn');
      const tabDirContent = document.getElementById('directCallDirectoryTab');
      const tabLogsContent = document.getElementById('directCallLogsTab');

      if (tab === 'directory') {
        if (tabDirBtn) {
          tabDirBtn.style.background = '#ffffff';
          tabDirBtn.style.color = '#059669';
          tabDirBtn.style.borderBottom = '2.5px solid #059669';
        }
        if (tabLogsBtn) {
          tabLogsBtn.style.background = 'transparent';
          tabLogsBtn.style.color = '#64748b';
          tabLogsBtn.style.borderBottom = '2.5px solid transparent';
        }
        if (tabDirContent) tabDirContent.style.display = 'block';
        if (tabLogsContent) tabLogsContent.style.display = 'none';
        renderDirectCallList();
      } else {
        if (tabLogsBtn) {
          tabLogsBtn.style.background = '#ffffff';
          tabLogsBtn.style.color = '#059669';
          tabLogsBtn.style.borderBottom = '2.5px solid #059669';
        }
        if (tabDirBtn) {
          tabDirBtn.style.background = 'transparent';
          tabDirBtn.style.color = '#64748b';
          tabDirBtn.style.borderBottom = '2.5px solid transparent';
        }
        if (tabDirContent) tabDirContent.style.display = 'none';
        if (tabLogsContent) tabLogsContent.style.display = 'block';
        renderDirectCallLogs();
      }
    }

    function renderDirectCallList() {
      const container = document.getElementById('directCallListContainer');
      if (!container) return;

      const supervisors = getSupervisorsList();
      let targetList = [];

      if (currentUserRole === 'admin') {
        // General Manager: can call floor supervisors & branch managers (top-down)
        targetList = supervisors.filter(s => s.id !== currentUserId && s.id !== 'admin');
      } else if (currentUserRole === 'branch_manager') {
        // Branch Manager: can ONLY call floor supervisors in their branch
        targetList = supervisors.filter(s => s.id !== currentUserId && s.branchId === currentBranchId && s.role !== 'admin' && s.id !== 'admin' && s.role !== 'branch_manager');
      } else {
        container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">الاتصال الصوتي مخصص للإدارة للتواصل مع المشرفين.</div>';
        return;
      }

      if (targetList.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 24px; color: var(--text-muted);">
            <span style="font-size: 32px; display: block; margin-bottom: 8px;">👥</span>
            <span>لا يوجد مشرفون مسجلون متاحون للاتصال في هذا النطاق.</span>
          </div>
        `;
        return;
      }

      // Sort: Online first, then alphabetical
      targetList.sort((a, b) => {
        const aOnline = isUserReallyOnline(a.id) ? 1 : 0;
        const bOnline = isUserReallyOnline(b.id) ? 1 : 0;
        return bOnline - aOnline;
      });

      let html = '';
      targetList.forEach(s => {
        const isOnline = isUserReallyOnline(s.id);
        const b = getBranchById(s.branchId);
        const branchName = b ? b.nameAr : (s.branchId || 'الفرع الرئيسي');
        const roleLabel = (s.role === 'branch_manager' || (s.id && s.id.startsWith('mgr_'))) ? '🏢 مدير فرع' : '👤 مسؤول صالة';
        const pres = livePresenceCache[s.id];
        const dev = deviceActivationsCache[s.id];
        const lastSeen = pres ? pres.lastSeen : (dev ? (dev.lastActive || dev.updatedAt) : null);
        const statusText = formatLivePresenceTime(lastSeen, isOnline);

        html += `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: ${isOnline ? '#f0fdf4' : '#f8fafc'}; border: 1.5px solid ${isOnline ? '#86efac' : '#e2e8f0'}; border-radius: 12px; gap: 10px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 50%; background: ${isOnline ? '#10b981' : '#cbd5e1'}; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800; flex-shrink: 0; box-shadow: ${isOnline ? '0 0 10px rgba(16,185,129,0.4)' : 'none'};">
                ${isOnline ? '🟢' : '⚪'}
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  <strong style="font-size: 14.5px; color: var(--secondary);">${escapeHtml(s.name)}</strong>
                  <span style="font-size: 11px; background: #e0f2fe; color: #0369a1; padding: 1px 7px; border-radius: 4px; font-weight: 700;">${roleLabel}</span>
                </div>
                <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                  📍 فرع ${escapeHtml(branchName)} • <span style="color: ${isOnline ? '#059669' : '#64748b'}; font-weight: 600;">${statusText}</span>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary" onclick="closeDirectCallModal(); initiateVoiceCall('${escapeHtml(s.id)}');" style="background: linear-gradient(135deg, #10b981, #059669); border: none; border-radius: 999px; padding: 9px 18px; font-size: 13px; font-weight: 800; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(16,185,129,0.35); cursor: pointer;">
              <span>📞</span>
              <span>اتصال بالمشرف</span>
            </button>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    function renderDirectCallLogs() {
      const container = document.getElementById('directCallLogsContainer');
      if (!container || !firebaseDb) return;

      firebaseDb.ref('call_logs').limitToLast(25).once('value').then(snap => {
        const val = snap.val();
        if (!val || Object.keys(val).length === 0) {
          container.innerHTML = `
            <div style="text-align: center; padding: 24px; color: var(--text-muted);">
              <span style="font-size: 30px; display: block; margin-bottom: 6px;">📋</span>
              <span>لا توجد مكالمات مسجلة حتى الآن.</span>
            </div>
          `;
          return;
        }

        const logs = Object.values(val);
        logs.sort((a, b) => (b.endedAt || b.createdAt || 0) - (a.endedAt || a.createdAt || 0));

        let html = '';
        logs.forEach(call => {
          const dt = call.endedAt ? new Date(call.endedAt) : new Date();
          const timeStr = dt.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
          const dateStr = dt.toLocaleDateString('ar-EG', { month: 'short', day: 'numeric' });
          const mins = String(Math.floor((call.durationSeconds || 0) / 60)).padStart(2, '0');
          const secs = String((call.durationSeconds || 0) % 60).padStart(2, '0');
          const durationFormatted = `${mins}:${secs}`;

          let statusBadge = '<span style="background: #ecfdf5; color: #047857; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">✅ ناجحة</span>';
          if (call.status === 'rejected') {
            statusBadge = '<span style="background: #fef2f2; color: #b91c1c; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">❌ مرفوضة</span>';
          } else if (call.status === 'no_answer' || call.status === 'missed') {
            statusBadge = '<span style="background: #fffbeb; color: #b45309; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">⏳ لم يتم الرد</span>';
          } else if (call.status === 'cancelled') {
            statusBadge = '<span style="background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">⚠️ ملغاة</span>';
          }

          html += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: white; border: 1px solid #e2e8f0; border-radius: 10px; gap: 8px; flex-wrap: wrap;">
              <div>
                <div style="font-size: 13.5px; font-weight: 800; color: var(--secondary);">
                  ${escapeHtml(call.callerName || 'الإدارة')} ➔ ${escapeHtml(call.calleeName || 'مشرف')}
                </div>
                <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">
                  📅 ${dateStr} - ${timeStr} • المدة: ${durationFormatted}
                </div>
              </div>
              <div>
                ${statusBadge}
              </div>
            </div>
          `;
        });

        container.innerHTML = html;
      }).catch(err => {
        container.innerHTML = '<div style="color: #b91c1c; padding: 12px;">تعذر تحميل السجل.</div>';
      });
    }


    /* ============================================================
       WEBRTC LIVE IN-APP AUDIO CALLING ENGINE (V6.0) - DIRECT P2P & RELIABLE FULL-DUPLEX
       ============================================================ */
    const RTC_CALL_CONFIG = {
      iceServers: [
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
        { urls: 'stun:stun4.l.google.com:19302' }
      ]
    };

    let activeCallId = null;
    let activePeerConnection = null;
    let activeCallLocalStream = null;
    let activeCallRole = null; // 'caller' | 'callee'
    let isCallEstablished = false; // Prevents self-destruction race conditions
    let callTimerInterval = null;
    let callSecondsCount = 0;
    let isCallMuted = false;
    let pendingIncomingCallObj = null;
    let outgoingCallTimeoutTimer = null;
    let activeCallFirebaseRef = null;
    let calleeCandidatesRef = null;
    let callerCandidatesRef = null;
    let activeIncomingCallsRef = null;
    let activeIncomingFallbackRef = null;
    let outgoingTargetSupId = null;
    let pendingIceCandidatesQueue = [];

    // Ensure any dangling microphone tracks are completely terminated on startup / page unload
    function terminateDanglingMicrophoneStreams() {
      try {
        if (activeCallLocalStream) {
          activeCallLocalStream.getTracks().forEach(t => {
            try { t.stop(); } catch (e) {}
          });
          activeCallLocalStream = null;
        }
      } catch (e) {}
    }
    window.addEventListener('pagehide', terminateDanglingMicrophoneStreams);
    window.addEventListener('beforeunload', terminateDanglingMicrophoneStreams);

    // Global gesture audio unlocker - Safely unlocks Web Audio without triggering ringtone sounds!
    function unlockAudioOnUserGesture() {
      try {
        initBackgroundKeepAliveAudio();
        // If background keep-alive is active and NO call is currently active, keep the silent carrier playing
        if (isBackgroundKeepAliveActive && bgAudioElement && bgAudioElement.paused && !activeCallId && !isCallEstablished) {
          if (!pendingIncomingCallObj || activeCallRole !== 'callee') {
            bgAudioElement.src = getSilentWavUri();
          }
          bgAudioElement.play().catch(() => {});
        }
        // Unlock Web Audio Context without playing any audible sound
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          if (!window._gestureAudioCtx) {
            window._gestureAudioCtx = new AudioContextClass();
          }
          if (window._gestureAudioCtx.state === 'suspended') {
            window._gestureAudioCtx.resume().catch(() => {});
          }
        }
      } catch (e) {}
    }
    document.addEventListener('touchstart', unlockAudioOnUserGesture, { passive: true });
    document.addEventListener('click', unlockAudioOnUserGesture, { passive: true });

    // Multi-Layer Background & Foreground Ringtone Engine
    function startAudioRingtone(type = 'incoming') {
      try {
        stopAudioRingtone();
        initBackgroundKeepAliveAudio();

        if (type === 'incoming') {
          // Layer 1: System-level Persistent Notification via Service Worker (vibrates screen & shows Answer/Decline buttons on lock screen)
          if (pendingIncomingCallObj) {
            notifyServiceWorkerIncomingCall(pendingIncomingCallObj);
          }

          // Layer 2: Ring at full 100% volume via dedicated audio element
          if (bgAudioElement) {
            try {
              bgAudioElement.pause();
              bgAudioElement.src = createStudioTelephoneWav('incoming');
              bgAudioElement.currentTime = 0;
              bgAudioElement.volume = 1.0; // FULL MAXIMUM VOLUME LOUD RINGING
              const p = bgAudioElement.play();
              if (p !== undefined) {
                p.catch(err => console.warn('bgAudioElement play notice:', err));
              }
            } catch (err) {
              console.warn('bgAudioElement setup err:', err);
            }
          }

          // Layer 3: Strong mechanical phone vibration
          if ('vibrate' in navigator) {
            try { navigator.vibrate([1000, 400, 1000, 400, 1500]); } catch (e) {}
          }

          // Layer 4: Lock screen media notification
          if ('mediaSession' in navigator) {
            const callerTitle = (pendingIncomingCallObj && pendingIncomingCallObj.callerName)
              ? pendingIncomingCallObj.callerName
              : 'الإدارة';
            navigator.mediaSession.metadata = new MediaMetadata({
              title: '📞 مكالمة صوتية واردة الآن!',
              artist: callerTitle,
              album: 'ديوان ماركت - اتصال مباشر',
              artwork: [{ src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
            });
            navigator.mediaSession.playbackState = 'playing';
          }
        } else {
          // Outgoing Ringback tone (نغمة توووت... توووت... الطبيعية الناعمة للمتصل)
          if (outgoingAudioElement) {
            try {
              outgoingAudioElement.currentTime = 0;
              outgoingAudioElement.volume = 0.35; // Soft, comfortable in the ear
              const p = outgoingAudioElement.play();
              if (p !== undefined) {
                p.catch(err => console.warn('outgoingAudioElement play notice:', err));
              }
            } catch (e) {}
          }
        }
      } catch (err) {
        console.warn('startAudioRingtone error:', err);
      }
    }

    function stopAudioRingtone() {
      // 1. Stop outgoing ringback tone immediately
      if (outgoingAudioElement) {
        try {
          outgoingAudioElement.pause();
          outgoingAudioElement.currentTime = 0;
        } catch (e) {}
      }

      // 2. Stop vibration
      if ('vibrate' in navigator) {
        try { navigator.vibrate(0); } catch (e) {}
      }

      // 3. Stop incoming ringtone completely & ALWAYS reset source to silent WAV
      if (bgAudioElement) {
        try {
          bgAudioElement.pause();
          bgAudioElement.currentTime = 0;
          bgAudioElement.src = getSilentWavUri();
          if (isBackgroundKeepAliveActive && !activeCallId && !isCallEstablished) {
            bgAudioElement.volume = 0.0001; // Back to silent background carrier mode only when no call is active
            const p = bgAudioElement.play();
            if (p !== undefined) p.catch(() => {});
          }
        } catch (e) {}
      }

      // 4. Dismiss lock-screen notification from Service Worker
      if (pendingIncomingCallObj && (pendingIncomingCallObj.callId || pendingIncomingCallObj.id)) {
        dismissServiceWorkerCallNotification(pendingIncomingCallObj.callId || pendingIncomingCallObj.id);
      }

      // 5. Restore lock screen mediaSession state
      try {
        if ('mediaSession' in navigator) {
          if (isBackgroundKeepAliveActive) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: 'ديوان ماركت - وضع العمل المستمر ⚡',
              artist: currentSupervisor || 'مشرف الصالة',
              album: 'المزامنة اللحظية والتوجيهات',
              artwork: [{ src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
            });
            navigator.mediaSession.playbackState = 'playing';
          } else {
            navigator.mediaSession.playbackState = 'none';
          }
        }
      } catch (e) {}
    }

    function playCallEndedSound() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.setValueAtTime(320, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    }

    // 1. INITIATE OUTGOING CALL (CALLER) - Direct Top-Down Calling
    async function initiateVoiceCallTo(targetSupervisorId) {
      return initiateVoiceCall(targetSupervisorId);
    }

    async function initiateVoiceCall(targetSupervisorId) {
      requestScreenWakeLock("outgoing_call");
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          if (!window._callAudioCtx || window._callAudioCtx.state === 'closed') { window._callAudioCtx = new AudioContextClass(); }
          if (window._callAudioCtx.state === 'suspended') { window._callAudioCtx.resume().catch(() => {}); }
        }

        if (!currentUserId) {
          showToast('يرجى تسجيل الدخول أولاً للاتصال.');
          return;
        }

        // Top-Down Calling Hierarchy Validation (Admin & Branch Managers can call supervisors)
        const isManager = (currentUserRole === 'admin' || currentUserRole === 'branch_manager' || currentUserId === 'admin' || (currentSupervisor && (currentSupervisor.includes('علي عبد العال') || currentSupervisor.includes('المدير'))));
        if (!isManager) {
          alert('عذراً، الاتصال الصوتي مخصص للإدارة للتواصل المباشر مع المشرفين.');
          return;
        }

        // If a stale call session exists, auto-clean it rather than blocking with an alert
        if (activeCallId) {
          cleanupCallState();
        }

        // Properly retrieve the supervisors directory list (fixes ReferenceError!)
        const supervisors = (typeof getSupervisorsList === 'function') ? getSupervisorsList() : [];
        let targetSup = supervisors.find(s => s.id === targetSupervisorId);
        if (!targetSup) {
          const b = (typeof getBranchById === 'function') ? getBranchById(currentBranchId) : null;
          targetSup = {
            id: targetSupervisorId,
            name: 'المشرف',
            branchId: (b && b.id) || currentBranchId || 'rawche'
          };
        }

        if (currentUserRole === 'branch_manager' && targetSup.branchId && targetSup.branchId !== currentBranchId) {
          alert('عذراً، كمدير فرع يمكنك الاتصال بمشرفي فرعك فقط.');
          return;
        }

        if (!firebaseDb) {
          showToast('الاتصال السحابي غير متاح حالياً.');
          return;
        }

        const b = (typeof getBranchById === 'function') ? getBranchById(targetSup.branchId) : null;
        const bName = b ? b.nameAr : targetSup.branchId;

        // Stop background keepalive audio during call so WebRTC has exclusive audio session
        if (bgAudioElement) {
          try {
            bgAudioElement.pause();
            bgAudioElement.currentTime = 0;
          } catch (e) {}
        }

        // Immediately Open Outgoing Call Modal for Instant Visual Feedback!
        document.getElementById('outgoingCalleeName').innerText = targetSup.name;
        document.getElementById('outgoingCalleeBranch').innerText = bName ? `📍 فرع ${bName}` : '';
        document.getElementById('outgoingStatusText').innerText = 'جارٍ تجهيز الاتصال الصوتي... ⏳';
        document.getElementById('callViewOutgoing').style.display = 'flex';
        document.getElementById('callViewIncoming').style.display = 'none';
        document.getElementById('callViewActive').style.display = 'none';
        document.getElementById('inAppCallModal').classList.add('open');
        document.body.classList.add('modal-open');

        // Request Microphone Permission via Intelligent Diagnostic Engine
        try {
          activeCallLocalStream = await acquireCallMicrophoneStream();
        } catch (err) {
          handleMicrophoneAccessError(err, true);
          return;
        }

        const callId = 'call_' + Date.now() + '_' + currentUserId + '_' + targetSupervisorId;
        activeCallId = callId;
        activeCallRole = 'caller';
        isCallEstablished = false;
        outgoingTargetSupId = targetSupervisorId;
        isCallMuted = false;
        pendingIceCandidatesQueue = [];

        // Setup WebRTC PeerConnection
        activePeerConnection = new RTCPeerConnection(RTC_CALL_CONFIG);
        activeCallLocalStream.getTracks().forEach(track => {
          activePeerConnection.addTrack(track, activeCallLocalStream);
        });

        activePeerConnection.ontrack = (event) => {
          console.log(' Caller received remote audio track:', event.streams);
          if (event.streams && event.streams[0]) {
            attachRemoteAudioStream(event.streams[0]);
          }
        };

        activePeerConnection.onicecandidate = (event) => {
          if (event.candidate && activeCallId && firebaseDb) {
            firebaseDb.ref(`calls/${activeCallId}/callerCandidates`).push(event.candidate.toJSON());
          }
        };

        
        activePeerConnection.oniceconnectionstatechange = () => {
          if (['disconnected', 'failed', 'closed'].includes(activePeerConnection.iceConnectionState)) {
             if (isCallEstablished) hangupCurrentCall('connection_lost');
          }
        };
activePeerConnection.onconnectionstatechange = () => {
          console.log(' Caller connectionState:', activePeerConnection ? activePeerConnection.connectionState : 'null');
          if (activePeerConnection) {
            if (activePeerConnection.connectionState === 'connected') {
              console.log(' Full-duplex audio connected on caller side!');
              const remoteAudio = document.getElementById('remoteAudioElement');
              if (remoteAudio && remoteAudio.paused) {
                remoteAudio.play().catch(() => {});
              }
            } else if (activePeerConnection.connectionState === 'disconnected' || activePeerConnection.connectionState === 'failed') {
              if (isCallEstablished) {
                hangupCurrentCall('connection_lost');
              }
            }
          }
        };

        // Create Offer with explicit audio reception
        const offer = await activePeerConnection.createOffer({ offerToReceiveAudio: true });
        await activePeerConnection.setLocalDescription(offer);

        const callData = {
          id: callId,
          callerId: currentUserId,
          callerName: currentSupervisor,
          callerRole: currentUserRole,
          callerBranch: currentBranchId,
          calleeId: targetSupervisorId,
          calleeName: targetSup.name,
          calleeBranch: targetSup.branchId,
          status: 'ringing',
          createdAt: Date.now(),
          offer: { type: offer.type, sdp: offer.sdp }
        };

        // 1. Write session to calls/{callId}
        console.log('📡 [Calls Engine] Step 1: Writing calls node to Firebase...');
        activeCallFirebaseRef = firebaseDb.ref(`calls/${callId}`);
        await activeCallFirebaseRef.set(callData);
        activeCallFirebaseRef.child('status').onDisconnect().set('ended');
        console.log('📡 [Calls Engine] Step 1 complete: calls node written.');

        // 2. Write direct point-to-point bell to incoming_calls/{targetSupervisorId}
        console.log('📡 [Calls Engine] Step 2: Writing incoming_calls node to Firebase...');
        const directBellRef = firebaseDb.ref(`incoming_calls/${targetSupervisorId}`);
        await directBellRef.set({
          callId: callId,
          callerId: currentUserId,
          callerName: currentSupervisor,
          callerRole: currentUserRole,
          callerBranch: currentBranchId,
          status: 'ringing',
          createdAt: Date.now(),
          offer: { type: offer.type, sdp: offer.sdp }
        });
        directBellRef.onDisconnect().remove();
        console.log('📡 [Calls Engine] Step 2 complete: incoming_calls node written.');

        // 3. Dispatch instant high-priority FCM push to supervisor device
        console.log('📡 [Calls Engine] Step 3: Dispatching FCM push...');
        if (typeof dispatchCallFcmPush === 'function') {
          dispatchCallFcmPush(targetSupervisorId, callData, targetSup.branchId);
        }

        // Update status text and start outgoing ringback tone
        console.log('📡 [Calls Engine] Step 4: Updating UI status text to ringing & starting audio tone...');
        const outStatus = document.getElementById('outgoingStatusText');
        if (outStatus) outStatus.innerText = 'جارٍ الاتصال ورنين الهاتف... 🔔';
        startAudioRingtone('outgoing');
        console.log('📡 [Calls Engine] Step 4 complete: Outgoing call in ringing state!');

        // Listen for Answer / Status Changes
        activeCallFirebaseRef.on('value', async (snapshot) => {
          const val = snapshot.val();
          if (!val) return;

          if (val.status === 'accepted' && val.answer && activeCallRole === 'caller' && !isCallEstablished) {
            isCallEstablished = true;
            stopAudioRingtone();
            if (outgoingCallTimeoutTimer) clearTimeout(outgoingCallTimeoutTimer);

            try {
              await activePeerConnection.setRemoteDescription(new RTCSessionDescription(val.answer));
            } catch (e) {
              console.warn('Caller setRemoteDescription error:', e);
            }

            // Flush any buffered callee ICE candidates
            if (pendingIceCandidatesQueue.length > 0) {
              pendingIceCandidatesQueue.forEach(cand => {
                activePeerConnection.addIceCandidate(new RTCIceCandidate(cand)).catch(() => {});
              });
              pendingIceCandidatesQueue = [];
            }

            // Listen for Callee ICE Candidates
            calleeCandidatesRef = firebaseDb.ref(`calls/${activeCallId}/calleeCandidates`);
            calleeCandidatesRef.on('child_added', (candSnap) => {
              const candidate = candSnap.val();
              if (candidate && activePeerConnection) {
                if (activePeerConnection.remoteDescription && activePeerConnection.remoteDescription.type) {
                  activePeerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch(e => console.warn(e));
                } else {
                  pendingIceCandidatesQueue.push(candidate);
                }
              }
            });

            // Clean up direct incoming bell
            if (outgoingTargetSupId && firebaseDb) {
              firebaseDb.ref(`incoming_calls/${outgoingTargetSupId}`).remove().catch(() => {});
            }

            // Transition to Active Call View
            transitionToActiveCallUi(val.calleeName || targetSup.name, bName);
          } else if (val.status === 'rejected') {
            stopAudioRingtone();
            showToast(`❌ تم رفض المكالمة من قِبل المشرف "${targetSup.name}".`);
            hangupCurrentCall('rejected_by_callee');
          } else if (val.status === 'busy') {
            stopAudioRingtone();
            showToast(`⚠️ المشرف "${targetSup.name}" مشغول في مكالمة أخرى.`);
            hangupCurrentCall('callee_busy');
          } else if (val.status === 'ended') {
            hangupCurrentCall('remote_ended');
          }
        });

        // 45s Ringing Timeout
        outgoingCallTimeoutTimer = setTimeout(() => {
          if (activeCallId && activeCallRole === 'caller' && !isCallEstablished) {
            showToast(`لم يتم الرد على المكالمة من قِبل "${targetSup.name}".`);
            hangupCurrentCall('timeout_no_answer');
          }
        }, 45000);

      } catch (fatalErr) {
        console.error('Fatal error in initiateVoiceCall:', fatalErr);
        closeCallModal();
        showToast('تعذر بدء المكالمة: ' + (fatalErr.message || fatalErr));
        cleanupCallState();
      }
    }

    // 2. LISTEN FOR INCOMING CALLS (CALLEE)
    function stopListeningForIncomingVoiceCalls() {
      if (activeIncomingCallsRef) {
        activeIncomingCallsRef.off();
        activeIncomingCallsRef = null;
      }
      if (activeIncomingFallbackRef) {
        activeIncomingFallbackRef.off();
        activeIncomingFallbackRef = null;
      }
    }

    function listenForIncomingVoiceCalls() {
      if (!firebaseDb || !currentUserId) return;

      stopListeningForIncomingVoiceCalls();

      console.log('📡 [Calls Engine] Listening for incoming voice calls for user:', currentUserId);

      // Primary Channel: Direct Point-to-Point Bell incoming_calls/{currentUserId}
      activeIncomingCallsRef = firebaseDb.ref(`incoming_calls/${currentUserId}`);
      activeIncomingCallsRef.on('value', (snapshot) => {
        const callData = snapshot.val();
        if (!callData) {
          // Caller removed the bell (hung up, cancelled, or timed out)
          // CRUCIAL: ONLY cancel if the call has NOT been accepted yet!
          if (pendingIncomingCallObj && activeCallRole === 'callee' && !isCallEstablished) {
            stopAudioRingtone();
            closeCallModal();
            showToast('تم إلغاء المكالمة من قِبل المتصل.');
            cleanupCallState();
          }
          return;
        }

        if (callData.status !== 'ringing') return;

        // Ignore calls older than 45 seconds
        if (Date.now() - (callData.createdAt || 0) > 45000) return;

        // If already in call, mark busy
        if (activeCallId && activeCallId !== callData.callId) {
          firebaseDb.ref(`calls/${callData.callId}/status`).set('busy').catch(() => {});
          return;
        }

        handleIncomingCallEvent(callData);
      });

      // Secondary Fallback Channel: calls table
      activeIncomingFallbackRef = firebaseDb.ref('calls').orderByChild('calleeId').equalTo(currentUserId).limitToLast(1);
      activeIncomingFallbackRef.on('child_added', (snapshot) => {
        const callData = snapshot.val();
        if (!callData || callData.status !== 'ringing') return;
        if (Date.now() - (callData.createdAt || 0) > 45000) return;
        if (activeCallId) return;
        handleIncomingCallEvent(callData);
      });
    }

    function handleIncomingCallEvent(callData) {
      const thisCallId = callData.callId || callData.id;
      if (activeCallId === thisCallId) return; // Already handling

      pendingIncomingCallObj = callData;
      activeCallId = thisCallId;
      activeCallRole = 'callee';
      isCallEstablished = false;
      pendingIceCandidatesQueue = [];

      // Listen for caller cancelling
      activeCallFirebaseRef = firebaseDb.ref(`calls/${thisCallId}`);
      activeCallFirebaseRef.on('value', (snap) => {
        const v = snap.val();
        if (v && (v.status === 'cancelled' || v.status === 'ended' || v.status === 'timeout_no_answer')) {
          stopAudioRingtone();
          closeCallModal();
          showToast('تم إلغاء المكالمة من قِبل المتصل.');
          cleanupCallState();
        }
      });

      // Show Incoming Call UI
      const roleText = callData.callerRole === 'admin' ? '👑 المدير العام' : (callData.callerRole === 'branch_manager' ? '🏢 مدير الفرع' : 'مشرف');
      const b = getBranchById(callData.callerBranch);
      const bName = b ? b.nameAr : callData.callerBranch;

      const nameEl = document.getElementById('incomingCallerName');
      const roleEl = document.getElementById('incomingCallerRole');
      if (nameEl) nameEl.innerText = callData.callerName || 'الإدارة';
      if (roleEl) roleEl.innerText = `${roleText} • ${bName}`;

      document.getElementById('callViewOutgoing').style.display = 'none';
      document.getElementById('callViewIncoming').style.display = 'flex';
      document.getElementById('callViewActive').style.display = 'none';
      document.getElementById('inAppCallModal').classList.add('open');
      document.body.classList.add('modal-open');

      // Start ringing sound & vibration (Multi-layer background & lock-screen engine)
      startAudioRingtone('incoming');

      // Check if user tapped "رد على المكالمة" from lock screen notification
      if (window.pendingCallAutoAcceptId && window.pendingCallAutoAcceptId === thisCallId) {
        window.pendingCallAutoAcceptId = null;
        setTimeout(() => {
          if (activeCallId === thisCallId && activeCallRole === 'callee' && !isCallEstablished) {
            acceptIncomingCall();
          }
        }, 200);
      }
    }

    // 3. ACCEPT INCOMING CALL
    async function acceptIncomingCall() {
      requestScreenWakeLock("active_call");
      if (!pendingIncomingCallObj || !activeCallId) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          if (!window._callAudioCtx || window._callAudioCtx.state === 'closed') { window._callAudioCtx = new AudioContextClass(); }
          if (window._callAudioCtx.state === 'suspended') { window._callAudioCtx.resume().catch(() => {}); }
        }


      // 1. Immediately flag as established so removal of incoming_calls node won't self-kill!
      isCallEstablished = true;

      // 2. Stop ringtone immediately & pause background carrier during speech
      stopAudioRingtone();
      if (bgAudioElement) {
        try {
          bgAudioElement.pause();
          bgAudioElement.currentTime = 0;
        } catch (e) {}
      }

      const callId = activeCallId;

      try {
        activeCallLocalStream = await acquireCallMicrophoneStream();
      } catch (err) {
        handleMicrophoneAccessError(err, false);
        hangupCurrentCall('callee_mic_denied');
        return;
      }

      // Remove incoming bell now that we've committed to accepting
      if (firebaseDb) {
        firebaseDb.ref(`incoming_calls/${currentUserId}`).remove().catch(() => {});
      }

      activePeerConnection = new RTCPeerConnection(RTC_CALL_CONFIG);
      activeCallLocalStream.getTracks().forEach(track => {
        activePeerConnection.addTrack(track, activeCallLocalStream);
      });

      activePeerConnection.ontrack = (event) => {
        console.log(' Callee received remote audio track:', event.streams);
        if (event.streams && event.streams[0]) {
          attachRemoteAudioStream(event.streams[0]);
        }
      };

      activePeerConnection.onicecandidate = (event) => {
        if (event.candidate && activeCallId && firebaseDb) {
          firebaseDb.ref(`calls/${activeCallId}/calleeCandidates`).push(event.candidate.toJSON());
        }
      };

      
        activePeerConnection.oniceconnectionstatechange = () => {
          if (['disconnected', 'failed', 'closed'].includes(activePeerConnection.iceConnectionState)) {
             if (isCallEstablished) hangupCurrentCall('connection_lost');
          }
        };
activePeerConnection.onconnectionstatechange = () => {
        console.log(' Callee connectionState:', activePeerConnection ? activePeerConnection.connectionState : 'null');
        if (activePeerConnection) {
          if (activePeerConnection.connectionState === 'connected') {
            console.log(' Full-duplex audio connected on callee side!');
            const remoteAudio = document.getElementById('remoteAudioElement');
            if (remoteAudio && remoteAudio.paused) {
              remoteAudio.play().catch(() => {});
            }
          } else if (activePeerConnection.connectionState === 'disconnected' || activePeerConnection.connectionState === 'failed') {
            if (isCallEstablished) {
              hangupCurrentCall('connection_lost');
            }
          }
        }
      };

      // Fetch caller offer if not present on pending object
      let offer = pendingIncomingCallObj.offer;
      if (!offer && firebaseDb) {
        const snap = await firebaseDb.ref(`calls/${callId}/offer`).once('value');
        offer = snap.val();
      }

      if (!offer) {
        showToast('تعذر ربط المكالمة (بيانات الاتصال غير متوفرة).');
        hangupCurrentCall('no_offer');
        return;
      }

      await activePeerConnection.setRemoteDescription(new RTCSessionDescription(offer));

      // Flush any queued caller ICE candidates
      if (pendingIceCandidatesQueue.length > 0) {
        pendingIceCandidatesQueue.forEach(cand => {
          activePeerConnection.addIceCandidate(new RTCIceCandidate(cand)).catch(() => {});
        });
        pendingIceCandidatesQueue = [];
      }

      const answer = await activePeerConnection.createAnswer({ offerToReceiveAudio: true });
      await activePeerConnection.setLocalDescription(answer);

      // ATOMIC UPDATE: Save Status 'accepted' AND Answer together in a transaction to prevent race conditions!
      const callRef = firebaseDb.ref(`calls/${callId}`);
      const { committed, snapshot } = await callRef.transaction((currentData) => {
        if (currentData === null) return currentData;
        if (currentData.status === 'ringing') {
          currentData.status = 'accepted';
          currentData.answer = { type: answer.type, sdp: answer.sdp };
          currentData.acceptedAt = Date.now();
          return currentData;
        }
        return;
      });

      if (!committed || !snapshot.val() || snapshot.val().status !== 'accepted') {
         console.warn('Race condition prevented.');
         if (typeof showToast === 'function') showToast('عذراً، المتصل أنهى المكالمة.');
         cleanupCallState();
         return;
      }

      activeCallFirebaseRef.child('status').onDisconnect().set('ended');

      // Listen for Caller ICE Candidates
      callerCandidatesRef = firebaseDb.ref(`calls/${activeCallId}/callerCandidates`);
      callerCandidatesRef.on('child_added', (candSnap) => {
        const candidate = candSnap.val();
        if (candidate && activePeerConnection) {
          if (activePeerConnection.remoteDescription && activePeerConnection.remoteDescription.type) {
            activePeerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch(e => console.warn(e));
          } else {
            pendingIceCandidatesQueue.push(candidate);
          }
        }
      });

      // Transition to Active Call View immediately
      const b = getBranchById(pendingIncomingCallObj.callerBranch);
      const bName = b ? b.nameAr : pendingIncomingCallObj.callerBranch;
      transitionToActiveCallUi(pendingIncomingCallObj.callerName, bName);
    }

    // 4. REJECT INCOMING CALL
    function rejectIncomingCall() {
      const thisCallId = (pendingIncomingCallObj && (pendingIncomingCallObj.callId || pendingIncomingCallObj.id)) || activeCallId;
      stopAudioRingtone();
      if (thisCallId) {
        dismissServiceWorkerCallNotification(thisCallId);
      }
      if (activeCallFirebaseRef) {
        activeCallFirebaseRef.update({ status: 'rejected' }).catch(() => {});
      }
      if (currentUserId && firebaseDb) {
        firebaseDb.ref(`incoming_calls/${currentUserId}`).remove().catch(() => {});
      }
      closeCallModal();
      cleanupCallState();
    }

    // 5. TRANSITION TO ACTIVE IN-CALL VIEW
    function transitionToActiveCallUi(peerName, peerBranch) {
      document.getElementById('activePeerName').innerText = peerName || 'المتصل';
      document.getElementById('activePeerSub').innerText = peerBranch ? `📍 ${peerBranch}` : '';

      document.getElementById('callViewOutgoing').style.display = 'none';
      document.getElementById('callViewIncoming').style.display = 'none';
      document.getElementById('callViewActive').style.display = 'flex';
      document.getElementById('inAppCallModal').classList.add('open');
      document.body.classList.add('modal-open');

      // Start duration timer
      callSecondsCount = 0;
      updateCallDurationDisplay();
      if (callTimerInterval) clearInterval(callTimerInterval);
      callTimerInterval = setInterval(() => {
        callSecondsCount++;
        updateCallDurationDisplay();
      }, 1000);

      // Route audio to earpiece by default (not external loudspeaker)
      applyCallAudioOutput(false);

      // Start proximity sensor to blank screen when placed on ear
      // startProximityEarDetection(); // Removed due to web constraints

      // Attempt to immediately play remote audio in case browser suspended it
      const remoteAudio = document.getElementById('remoteAudioElement');
      if (remoteAudio && remoteAudio.srcObject) {
        remoteAudio.play().catch(() => {});
      }
    }

    function updateCallDurationDisplay() {
      const mins = String(Math.floor(callSecondsCount / 60)).padStart(2, '0');
      const secs = String(callSecondsCount % 60).padStart(2, '0');
      const durationStr = `${mins}:${secs}`;
      const el = document.getElementById('callDurationDisplay');
      if (el) el.innerText = durationStr;
      const floatingEl = document.getElementById('floatingCallDuration');
      if (floatingEl) floatingEl.innerText = durationStr;
    }

    // WHATSAPP CALL SCREEN MINIMIZE & MULTITASKING EXPANSION
    function minimizeCallScreen() {
      const modal = document.getElementById('inAppCallModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');

      if (activeCallId) {
        const floatingBar = document.getElementById('floatingCallBar');
        const floatingPeer = document.getElementById('floatingPeerName');
        const floatingTimer = document.getElementById('floatingCallDuration');
        if (floatingBar) {
          floatingBar.style.display = 'flex';
          const activeName = (pendingIncomingCallObj && pendingIncomingCallObj.callerName) ||
                             (document.getElementById('activePeerName') ? document.getElementById('activePeerName').innerText :
                             (document.getElementById('outgoingCalleeName') ? document.getElementById('outgoingCalleeName').innerText : 'المشرف'));
          if (floatingPeer) floatingPeer.innerText = activeName;
          if (floatingTimer && document.getElementById('callDurationDisplay')) {
            floatingTimer.innerText = document.getElementById('callDurationDisplay').innerText;
          }
        }
      }
    }

    function expandCallScreen() {
      const floatingBar = document.getElementById('floatingCallBar');
      if (floatingBar) floatingBar.style.display = 'none';

      const modal = document.getElementById('inAppCallModal');
      if (modal) modal.classList.add('open');
      document.body.classList.add('modal-open');
    }

    function toggleCallMute() {
      if (!activeCallLocalStream) return;
      isCallMuted = !isCallMuted;
      activeCallLocalStream.getAudioTracks().forEach(track => {
        track.enabled = !isCallMuted;
      });

      const btn = document.getElementById('btnToggleCallMute');
      const lbl = document.getElementById('lblMuteText');
      if (btn) {
        if (isCallMuted) {
          btn.innerHTML = '🔇';
          btn.classList.add('active-muted');
          btn.title = 'الميكروفون مكتوم (اضغط لإلغاء الكتم)';
          if (lbl) {
            lbl.innerText = 'مكتوم';
            lbl.style.color = '#ea0038';
          }
          showToast('🔇 تم كتم صوت الميكروفون');
        } else {
          btn.innerHTML = '🎙️';
          btn.classList.remove('active-muted');
          btn.title = 'كتم الصوت';
          if (lbl) {
            lbl.innerText = 'كتم';
            lbl.style.color = '#8696a0';
          }
          showToast('🎙️ تم تفعيل الميكروفون');
        }
      }
    }

    // 7. TOGGLE SPEAKER / EARPIECE AUDIO ROUTING & WEB AUDIO GAIN CONTROLLER
    let isSpeakerActive = false; // Default: FALSE (Audio strictly stays on internal earpiece, NOT external speakerphone!)

    function attachRemoteAudioStream(stream) {
      const remoteAudio = document.getElementById('remoteAudioElement');
      if (!remoteAudio) return;
      remoteAudio.srcObject = stream;

      // Clear any mediaSession state so mobile OS does NOT treat call as media/music player (which forces loudspeaker)
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'none';
      }

      // Web Audio Gain Controller for true cross-platform acoustic level control (including iOS Safari)
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          if (!window._callAudioCtx || window._callAudioCtx.state === 'closed') {
            window._callAudioCtx = new AudioContextClass();
          }
          if (window._callAudioCtx.state === 'suspended') {
            window._callAudioCtx.resume().catch(() => {});
          }
          if (window._callGainNode) {
            try { window._callGainNode.disconnect(); } catch (e) {}
          }
          const source = window._callAudioCtx.createMediaStreamSource(stream);
          window._callGainNode = window._callAudioCtx.createGain();
          window._callGainNode.gain.value = isSpeakerActive ? 1.0 : 0.4;
          source.connect(window._callGainNode);
          window._callGainNode.connect(window._callAudioCtx.destination);

          // Mute raw <audio> element to prevent double playback, since GainNode outputs to destination at correct level
          remoteAudio.muted = true;
        }
      } catch (e) {
        console.warn('Web Audio gain controller notice:', e);
        remoteAudio.muted = false;
      }

      applyCallAudioOutput(isSpeakerActive);
      remoteAudio.play().catch(e => console.warn('Remote play notice:', e));
    }

    async function applyCallAudioOutput(useSpeaker) {
      isSpeakerActive = !!useSpeaker;
      updateSpeakerButtonUi();

      // If user enables loudspeaker, immediately unblank the screen
      if (isSpeakerActive) {
        setProximityCurtain(false, 'speaker_enabled');
      }

      const remoteAudio = document.getElementById('remoteAudioElement');
      if (!remoteAudio) return;

      // 1. Update Web Audio gain node
      if (window._callGainNode && window._callGainNode.gain) {
        window._callGainNode.gain.value = useSpeaker ? 1.0 : 0.4;
      }

      // 2. Manage MediaSession: ONLY set to 'playing' when speaker is explicitly ON
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = useSpeaker ? 'playing' : 'none';
      }

      // 3. Hardware sink routing via setSinkId if supported
      if (typeof remoteAudio.setSinkId === 'function') {
        try {
          if (useSpeaker) {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const audioOutputs = devices.filter(d => d.kind === 'audiooutput');
            const speakerDevice = audioOutputs.find(d => 
              d.label.toLowerCase().includes('speaker') || 
              d.label.toLowerCase().includes('مكبر') ||
              d.label.toLowerCase().includes('loudspeaker')
            ) || audioOutputs.find(d => d.deviceId === 'default');

            if (speakerDevice && speakerDevice.deviceId) {
              console.log('🔊 [AudioRouting] Routing to external speaker:', speakerDevice.label || speakerDevice.deviceId);
              await remoteAudio.setSinkId(speakerDevice.deviceId);
            }
          } else {
            // Private Earpiece mode: Clear sink override so OS uses telephony communication receiver
            await remoteAudio.setSinkId('');
          }
        } catch (err) {
          console.warn('Audio output sink routing notice:', err);
        }
      }

      // 4. Element volume fallback
      try {
        remoteAudio.volume = useSpeaker ? 1.0 : 0.4;
      } catch (e) {}
    }

    function toggleCallSpeaker() {
      applyCallAudioOutput(!isSpeakerActive);
    }

    function updateSpeakerButtonUi() {
      const btn = document.getElementById('btnToggleSpeaker');
      const lbl = document.getElementById('lblSpeakerText');
      const btnOut = document.getElementById('btnOutgoingSpeaker');

      if (isSpeakerActive) {
        if (btn) {
          btn.innerHTML = '🔊';
          btn.classList.add('active-speaker');
          btn.title = 'الصوت على مكبر الصوت الخارجي (اضغط للتحويل لسماعة الأذن)';
        }
        if (btnOut) {
          btnOut.innerHTML = '🔊';
          btnOut.classList.add('active-speaker');
        }
        if (lbl) {
          lbl.innerText = 'مكبّر: مفعّل';
          lbl.style.color = '#25d366';
        }
      } else {
        if (btn) {
          btn.innerHTML = '📱';
          btn.classList.remove('active-speaker');
          btn.title = 'الصوت على سماعة الأذن الداخلية (اضغط للتحويل للمكبر الخارجي)';
        }
        if (btnOut) {
          btnOut.innerHTML = '📱';
          btnOut.classList.remove('active-speaker');
        }
        if (lbl) {
          lbl.innerText = 'سماعة الأذن';
          lbl.style.color = '#8696a0';
        }
      }
    }

    // ============================================================
    // 7b. PROXIMITY SENSOR & EAR-DETECTION SCREEN BLACKOUT (WHATSAPP CALL SCREEN OFF)
    // ============================================================
    let proximitySensorObj = null;
    let ambientLightSensorObj = null;
    let isProximityListening = false;
    let isProximityCurtainActive = false;
    let isPhoneTiltedToEar = false;
    let lastCurtainTapTime = 0;

    function initProximityEarDetection() {
      const curtain = document.getElementById('waProximityCurtain');
      if (!curtain) return;

      // Swallows all touches on the blackout curtain to completely prevent accidental clicks
      curtain.addEventListener('touchstart', handleCurtainTouchBlocker, { passive: false });
      curtain.addEventListener('touchmove', handleCurtainTouchBlocker, { passive: false });
      curtain.addEventListener('pointerdown', handleCurtainTouchBlocker, { passive: false });
      curtain.addEventListener('click', handleCurtainTouchBlocker, { passive: false });

      // Emergency double-tap override to wake screen manually if user needs screen while holding phone
      curtain.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const now = Date.now();
        if (now - lastCurtainTapTime < 380) {
          setProximityCurtain(false, 'double_tap_override');
        }
        lastCurtainTapTime = now;
      }, { passive: false });
    }

    function handleCurtainTouchBlocker(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    function startProximityEarDetection() {
      if (isProximityListening) return;
      isProximityListening = true;

      // 1. Hardware ProximitySensor API (Chromium / Android PWA)
      if ('ProximitySensor' in window) {
        try {
          if (!proximitySensorObj) {
            proximitySensorObj = new ProximitySensor();
            proximitySensorObj.addEventListener('reading', () => {
              if (!isProximityListening || isSpeakerActive) {
                setProximityCurtain(false);
                return;
              }
              setProximityCurtain(!!proximitySensorObj.near, 'hardware_proximity');
            });
            proximitySensorObj.addEventListener('error', (err) => {
              console.log('ProximitySensor fallback to heuristics:', err);
            });
          }
          proximitySensorObj.start();
        } catch (e) {
          console.log('ProximitySensor init notice:', e);
        }
      }

      // 2. Ambient Light Sensor API (Lux drops to ~0 when covered by human ear)
      if ('AmbientLightSensor' in window) {
        try {
          if (!ambientLightSensorObj) {
            ambientLightSensorObj = new AmbientLightSensor();
            ambientLightSensorObj.addEventListener('reading', () => {
              if (!isProximityListening || isSpeakerActive) {
                setProximityCurtain(false);
                return;
              }
              if (ambientLightSensorObj.illuminance <= 2.0 && isPhoneTiltedToEar) {
                setProximityCurtain(true, 'ambient_light');
              } else if (ambientLightSensorObj.illuminance > 5.0) {
                setProximityCurtain(false, 'ambient_light');
              }
            });
            ambientLightSensorObj.addEventListener('error', (err) => {
              console.log('AmbientLightSensor notice:', err);
            });
          }
          ambientLightSensorObj.start();
        } catch (err) {}
      }

      // 3. DeviceOrientation Event (Detects vertical ear-holding phone posture)
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleDeviceOrientationProximity, true);
      }

      // 4. Ear/Cheek Touch Guard (Captures touches on upper bezel/speaker area during vertical posture)
      document.addEventListener('touchstart', handleCallEarTouchGuard, { capture: true, passive: false });
    }

    function stopProximityEarDetection() {
      isProximityListening = false;
      setProximityCurtain(false, 'call_stopped');

      if (proximitySensorObj) {
        try { proximitySensorObj.stop(); } catch (e) {}
      }
      if (ambientLightSensorObj) {
        try { ambientLightSensorObj.stop(); } catch (e) {}
      }
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientationProximity, true);
      }
      document.removeEventListener('touchstart', handleCallEarTouchGuard, true);
      isPhoneTiltedToEar = false;
    }

    function handleDeviceOrientationProximity(event) {
      if (!isProximityListening || isSpeakerActive) {
        isPhoneTiltedToEar = false;
        return;
      }
      const beta = event.beta;   // [-180, 180] front-to-back tilt
      const gamma = event.gamma; // [-90, 90] left-to-right tilt

      if (beta !== null) {
        // Phone held upright near ear: beta between 55deg and 125deg
        const isUpright = Math.abs(beta) >= 55 && Math.abs(beta) <= 125;
        const isHeadAligned = Math.abs(gamma || 0) <= 50;

        isPhoneTiltedToEar = isUpright && isHeadAligned;

        // If user pulls phone away from ear (e.g. holds flat or beta < 40), turn screen back on!
        if (Math.abs(beta) < 40 && isProximityCurtainActive) {
          setProximityCurtain(false, 'tilt_away');
        }
      }
    }

    function handleCallEarTouchGuard(event) {
      if (!isProximityListening || isSpeakerActive) return;
      // If phone is in vertical posture against ear and face/ear touches screen
      if (isPhoneTiltedToEar) {
        const touch = event.touches[0];
        if (touch) {
          // Touch on upper 35% of viewport (near handset speaker) or multi-touch cheek contact
          if (touch.clientY < window.innerHeight * 0.35 || event.touches.length > 1) {
            event.preventDefault();
            event.stopPropagation();
            setProximityCurtain(true, 'ear_touch_guard');
          }
        }
      }
    }

    function setProximityCurtain(active, reason = '') {
      // If loudspeaker is active, NEVER turn off screen!
      if (isSpeakerActive && active) {
        active = false;
      }

      isProximityCurtainActive = active;
      const curtain = document.getElementById('waProximityCurtain');
      if (!curtain) return;

      if (active) {
        curtain.style.display = 'block';
        curtain.classList.add('active');
        document.body.classList.add('proximity-blackout');
      } else {
        curtain.style.display = 'none';
        curtain.classList.remove('active');
        document.body.classList.remove('proximity-blackout');
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProximityEarDetection);
    } else {
      initProximityEarDetection();
    }

    // 7. HANGUP & CLEANUP
    function hangupCurrentCall(reason = 'user_ended') {
      stopAudioRingtone();
      if (outgoingCallTimeoutTimer) clearTimeout(outgoingCallTimeoutTimer);

      const mins = String(Math.floor(callSecondsCount / 60)).padStart(2, '0');
      const secs = String(callSecondsCount % 60).padStart(2, '0');
      const durationStr = `${mins}:${secs}`;

      if (activeCallFirebaseRef) {
        activeCallFirebaseRef.update({
          status: (reason === 'cancelled' ? 'cancelled' : 'ended'),
          endedAt: Date.now()
        }).catch(() => {});
        activeCallFirebaseRef.off();
      }

      if (firebaseDb) {
        if (outgoingTargetSupId) {
          firebaseDb.ref(`incoming_calls/${outgoingTargetSupId}`).remove().catch(() => {});
        }
        if (currentUserId) {
          firebaseDb.ref(`incoming_calls/${currentUserId}`).remove().catch(() => {});
        }
      }

      if (callSecondsCount > 0) {
        playCallEndedSound();
        showToast(`📞 انتهت المكالمة (المدة: ${durationStr})`);
      }

      // Record call entry to executive call logs
      try {
        if (firebaseDb && activeCallId) {
          const logData = {
            callId: activeCallId,
            callerId: (pendingIncomingCallObj && pendingIncomingCallObj.callerId) || currentUserId,
            callerName: (pendingIncomingCallObj && pendingIncomingCallObj.callerName) || currentSupervisor,
            callerRole: (pendingIncomingCallObj && pendingIncomingCallObj.callerRole) || currentUserRole,
            calleeId: (pendingIncomingCallObj && pendingIncomingCallObj.calleeId) || outgoingTargetSupId,
            calleeName: (pendingIncomingCallObj && pendingIncomingCallObj.calleeName) || (document.getElementById('outgoingCalleeName') ? document.getElementById('outgoingCalleeName').innerText : 'مشرف'),
            durationSeconds: callSecondsCount,
            status: reason === 'cancelled' ? 'cancelled' : (reason === 'rejected_by_callee' ? 'rejected' : (reason === 'timeout_no_answer' ? 'no_answer' : (callSecondsCount > 0 ? 'completed' : 'missed'))),
            endedAt: Date.now()
          };
          firebaseDb.ref('call_logs/' + activeCallId).set(logData).catch(() => {});
        }
      } catch (e) {}

      closeCallModal();
      cleanupCallState();
    }

    function closeCallModal() {
      const modal = document.getElementById('inAppCallModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
      const floatingBar = document.getElementById('floatingCallBar');
      if (floatingBar) floatingBar.style.display = 'none';
    }

    function cleanupCallState() {
      if (callTimerInterval) {
        clearInterval(callTimerInterval);
        callTimerInterval = null;
      }
      callSecondsCount = 0;
      updateCallDurationDisplay();

      if (activeCallLocalStream) {
        try {
          activeCallLocalStream.getTracks().forEach(t => {
            try { t.stop(); } catch (e) {}
          });
        } catch (e) {}
        activeCallLocalStream = null;
      }

      
      if (calleeCandidatesRef) { calleeCandidatesRef.off(); calleeCandidatesRef = null; }
      if (callerCandidatesRef) { callerCandidatesRef.off(); callerCandidatesRef = null; }
      if (activeCallFirebaseRef) { activeCallFirebaseRef.off(); activeCallFirebaseRef = null; }
if (window._callAudioCtx) {
        try { window._callAudioCtx.close(); } catch (e) {}
        window._callAudioCtx = null;
        window._callGainNode = null;
      }

      const remoteAudio = document.getElementById('remoteAudioElement');
      if (remoteAudio) {
        try {
          remoteAudio.muted = false;
          remoteAudio.pause();
          remoteAudio.srcObject = null;
        } catch (e) {}
      }

      if (activePeerConnection) {
        try { activePeerConnection.close(); } catch (e) {}
        activePeerConnection = null;
      }

      activeCallId = null;
      activeCallRole = null;
      isCallEstablished = false;
      outgoingTargetSupId = null;
      pendingIncomingCallObj = null;
      activeCallFirebaseRef = null;
      isCallMuted = false;
      pendingIceCandidatesQueue = [];

      const muteBtn = document.getElementById('btnToggleCallMute');
      if (muteBtn) {
        muteBtn.innerHTML = '🎙️ كتم الصوت';
        muteBtn.style.background = 'rgba(255,255,255,0.15)';
        muteBtn.style.borderColor = 'rgba(255,255,255,0.3)';
      }

      isSpeakerActive = false;
      updateSpeakerButtonUi();
      stopProximityEarDetection();

      // RESTORE BACKGROUND KEEPALIVE AUDIO NOW THAT CALL HAS FINISHED
      try {
        const isKeepAliveDesired = isBackgroundKeepAliveActive || (localStorage.getItem('diwan_bg_keepalive') === 'true');
        if (isKeepAliveDesired && typeof startBackgroundKeepAlive === 'function') {
          console.log('⚡ [KeepAlive] Call ended: Restoring background keepalive audio channel...');
          startBackgroundKeepAlive(true); // Quiet restore without extra toast
        }
      } catch (e) {
        console.warn('Error restoring background keepalive after call:', e);
      }
    }

    function openAdminDirectiveModal() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') {
        alert("عذراً، إرسال التوجيهات الإدارية مخصص للإدارة ومديري الفروع فقط.");
        return;
      }

      // Request notification permission if not yet prompted
      if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
      }

      const rolePill = document.getElementById('directiveSenderRolePill');
      if (rolePill) {
        rolePill.innerText = (currentUserRole === 'admin')
          ? `بصفتك: المدير العام (${currentSupervisor})`
          : `بصفتك: مدير الفرع (${currentSupervisor})`;
      }

      populateDirectiveBranchSelect();
      populateDirectiveSupervisorSelect();
      cancelDirectiveAudioRecording();

      const textInp = document.getElementById('directiveInputText');
      if (textInp) textInp.value = '';
      const prioSel = document.getElementById('directivePrioritySelect');
      if (prioSel) prioSel.value = 'urgent';
      const errBox = document.getElementById('directiveFormError');
      if (errBox) errBox.innerText = '';

      listenToBranchDirectives();
      switchDirectiveTab('new');
      renderDirectivesHistoryList();

      document.body.classList.add('modal-open');
      const modal = document.getElementById('adminDirectiveModal');
      if (modal) modal.classList.add('open');

      if (directiveModalLiveInterval) clearInterval(directiveModalLiveInterval);
      directiveModalLiveInterval = setInterval(() => {
        const m = document.getElementById('adminDirectiveModal');
        if (m && m.classList.contains('open')) {
          renderDirectivesHistoryList();
        } else {
          clearInterval(directiveModalLiveInterval);
          directiveModalLiveInterval = null;
        }
      }, 2000);
    }

    let directiveModalLiveInterval = null;

    function closeAdminDirectiveModal() {
      if (directiveModalLiveInterval) {
        clearInterval(directiveModalLiveInterval);
        directiveModalLiveInterval = null;
      }
      cancelDirectiveAudioRecording();
      const modal = document.getElementById('adminDirectiveModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function switchDirectiveTab(tab) {
      const btnNew = document.getElementById('tabBtnNewDirective');
      const btnLog = document.getElementById('tabBtnDirectivesLog');
      const contentNew = document.getElementById('directiveNewTabContent');
      const contentLog = document.getElementById('directiveLogTabContent');

      if (tab === 'new') {
        if (btnNew) btnNew.classList.add('active');
        if (btnLog) btnLog.classList.remove('active');
        if (contentNew) contentNew.style.display = 'block';
        if (contentLog) contentLog.style.display = 'none';
      } else {
        if (btnNew) btnNew.classList.remove('active');
        if (btnLog) btnLog.classList.add('active');
        if (contentNew) contentNew.style.display = 'none';
        if (contentLog) contentLog.style.display = 'block';
        renderDirectivesHistoryList();
      }
    }

    function populateDirectiveBranchSelect() {
      const branchSel = document.getElementById('directiveBranchSelect');
      if (!branchSel) return;
      const branches = getBranchesList();

      if (currentUserRole === 'admin') {
        branchSel.innerHTML = `
          <option value="all" selected>🌐 جميع فروع ديوان ماركت (تعميم مركزي)</option>
          ${branches.map(b => `<option value="${escapeHtml(b.id)}">${escapeHtml(b.nameAr)} (${escapeHtml(b.location)})</option>`).join('')}
        `;
        branchSel.disabled = false;
      } else {
        const myBranch = getBranchById(currentBranchId);
        branchSel.innerHTML = `<option value="${escapeHtml(currentBranchId)}" selected>${escapeHtml(myBranch ? myBranch.nameAr : currentBranchId)}</option>`;
        branchSel.disabled = true;
      }
    }

    function onDirectiveBranchChange() {
      populateDirectiveSupervisorSelect();
    }

    function populateDirectiveSupervisorSelect() {
      const supSel = document.getElementById('directiveSupervisorSelect');
      const branchSel = document.getElementById('directiveBranchSelect');
      if (!supSel) return;
      const targetBranch = branchSel ? branchSel.value : 'all';
      const supervisors = getSupervisorsList();

      const getDevIcon = (id) => {
        const isOnline = isUserReallyOnline(id);
        if (isOnline) return '🟢 [متصل لحظياً الآن] ';
        const pres = livePresenceCache[id];
        const dev = deviceActivationsCache[id];
        const lastSeen = pres ? pres.lastSeen : (dev ? (dev.lastActive || dev.updatedAt) : null);
        const statusText = formatLivePresenceTime(lastSeen, false);
        if (statusText.includes('أغلق التطبيق للتو')) return '🔴 [أغلق التطبيق للتو] ';
        if (dev && (dev.notificationPermission === 'granted' || !!dev.token)) return '📱 [مفعل للتنبيه] ';
        if (lastSeen) return '🟡 [كان متصلاً] ';
        return '⚪ ';
      };

      if (currentUserRole === 'admin') {
        supSel.disabled = false;
        if (targetBranch === 'all') {
          // Central broadcast across all branches
          const allBranchManagers = supervisors.filter(s => s.role === 'branch_manager' || (s.id && s.id.startsWith('mgr_')));
          
          let html = `
            <option value="all" selected>🌐 كافة المشرفين والمسؤولين والمدراء في كل الفروع</option>
            <option value="all_managers">👔 كافة مديري الفروع فقط (في جميع الفروع)</option>
            <option value="all_supervisors">👤 كافة مسؤولي الصالة فقط (في جميع الفروع)</option>
          `;

          if (allBranchManagers.length > 0) {
            html += `<optgroup label="🏢 إرسال لمدير فرع محدد:">`;
            allBranchManagers.forEach(bm => {
              const bObj = getBranchById(bm.branchId);
              const branchLabel = bObj ? bObj.nameAr : bm.branchId;
              const icon = getDevIcon(bm.id);
              html += `<option value="${escapeHtml(bm.id)}">${icon}🏢 ${escapeHtml(bm.name)} (${escapeHtml(branchLabel)})</option>`;
            });
            html += `</optgroup>`;
          }

          supSel.innerHTML = html;
        } else {
          // Admin targeting a specific branch
          const bObj = getBranchById(targetBranch);
          const branchName = bObj ? bObj.nameAr : targetBranch;
          const branchUsers = supervisors.filter(s => s.branchId === targetBranch && s.id !== 'admin' && s.role !== 'admin');
          const branchMgrs = branchUsers.filter(s => s.role === 'branch_manager' || (s.id && s.id.startsWith('mgr_')));
          const branchSups = branchUsers.filter(s => s.role === 'supervisor');

          let html = `
            <option value="all" selected>👥 كافة موظفي ${escapeHtml(branchName)} (المدير ومسؤولو الصالة)</option>
          `;

          if (branchMgrs.length > 0) {
            html += `<optgroup label="🏢 إدارة الفرع (المدراء):">`;
            branchMgrs.forEach(bm => {
              const icon = getDevIcon(bm.id);
              html += `<option value="${escapeHtml(bm.id)}">${icon}🏢 [مدير الفرع] ${escapeHtml(bm.name)}</option>`;
            });
            html += `</optgroup>`;
          }

          if (branchSups.length > 0) {
            html += `<optgroup label="👤 مسؤولو الصالة:">`;
            branchSups.forEach(s => {
              const icon = getDevIcon(s.id);
              html += `<option value="${escapeHtml(s.id)}">${icon}👤 ${escapeHtml(s.name)}</option>`;
            });
            html += `</optgroup>`;
          }

          supSel.innerHTML = html;
        }
      } else {
        // Branch Manager sending within their own branch
        supSel.disabled = false;
        const branchSups = supervisors.filter(s => s.branchId === currentBranchId && s.role === 'supervisor');
        supSel.innerHTML = `
          <option value="all" selected>👥 كافة مسؤولي الصالة في فرعك</option>
          ${branchSups.map(s => {
            const icon = getDevIcon(s.id);
            return `<option value="${escapeHtml(s.id)}">${icon}👤 ${escapeHtml(s.name)}</option>`;
          }).join('')}
        `;
      }
    }

    // Send Directive Engine
    async function sendDirective() {
      const branchSel = document.getElementById('directiveBranchSelect');
      const supSel = document.getElementById('directiveSupervisorSelect');
      const prioSel = document.getElementById('directivePrioritySelect');
      const textInp = document.getElementById('directiveInputText');
      const errBox = document.getElementById('directiveFormError');
      const sendBtn = document.getElementById('btnSendDirective');

      const targetBranch = branchSel ? branchSel.value : 'all';
      const targetUser = supSel ? supSel.value : 'all';
      const priority = prioSel ? prioSel.value : 'urgent';
      const text = textInp ? textInp.value.trim() : '';

      if (!text && !directiveAudioBase64) {
        if (errBox) errBox.innerText = 'يرجى كتابة نص للتوجيه أو تسجيل ملاحظة صوتية واحدة على الأقل.';
        return;
      }

      if (errBox) errBox.innerText = '';
      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerText = '⏳ جارٍ الإرسال والتنبيه...';
      }

      const dirId = 'dir_' + Date.now();
      const now = new Date();
      const timeFormatted = 'اليوم ' + now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

      const directiveObj = {
        id: dirId,
        branchId: targetBranch,
        targetUserId: targetUser,
        senderRole: currentUserRole,
        senderName: currentSupervisor,
        senderId: (typeof currentUserId !== 'undefined' ? currentUserId : 'admin'),
        priority: priority,
        text: text,
        audioBase64: directiveAudioBase64 || '',
        audioDuration: directiveAudioDuration || 0,
        createdAt: now.toISOString(),
        timeFormatted: timeFormatted,
        acknowledged: false,
        acknowledgedBy: '',
        acknowledgedAt: ''
      };

      // Determine target branches to dispatch to
      let targetBranchIds = [];
      if (targetBranch === 'all') {
        if (targetUser && targetUser !== 'all' && targetUser !== 'all_managers' && targetUser !== 'all_supervisors') {
          // If a specific manager or supervisor was selected while 'all' branches was chosen, route to their branch!
          const targetSupObj = getSupervisorsList().find(s => s.id === targetUser);
          if (targetSupObj && targetSupObj.branchId && targetSupObj.branchId !== 'all') {
            targetBranchIds = [targetSupObj.branchId];
          } else {
            targetBranchIds = getBranchesList().map(b => b.id);
          }
        } else {
          targetBranchIds = getBranchesList().map(b => b.id);
        }
      } else {
        targetBranchIds = [targetBranch];
      }

      // Save locally & push to Firebase
      targetBranchIds.forEach(bId => {
        const branchDirectiveObj = Object.assign({}, directiveObj, { branchId: bId });
        const key = 'diwan_directives_' + bId + '_' + currentDate;
        const curList = safeJsonParse(safeGetItem(key), []);
        curList.unshift(branchDirectiveObj);
        safeSetItem(key, JSON.stringify(curList.slice(0, 30)));
        if (!memoryDirectivesCache[bId]) memoryDirectivesCache[bId] = [];
        memoryDirectivesCache[bId].unshift(branchDirectiveObj);

        if (firebaseDb) {
          firebaseDb.ref('branches/' + bId + '/directives/' + dirId)
            .set(branchDirectiveObj)
            .catch(e => console.warn('Firebase directive push failed for branch', bId, e));
        }
      });

      // Dispatch FCM Push notification to recipients' devices if configured
      dispatchFcmPush(directiveObj, targetBranchIds);

      // Show toast & refresh banner if sender is in target branch
      showToast("🚀 تم إرسال التوجيه الإداري وتنبيه المستلمين فوراً!");
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.innerText = '🚀 إرسال التوجيه وتنبيه الهاتف فوراً';
      }

      cancelDirectiveAudioRecording();
      if (textInp) textInp.value = '';
      switchDirectiveTab('log');
      renderDirectivesHistoryList();
      checkAndRenderActiveDirectives();
    }

    // Realtime Directives Listener (Multi-Branch for Admin, Single Branch for Supervisors)
    let activeDirectiveListeners = [];
    let memoryDirectivesCache = {}; // { branchId: [directives] }

    function listenToBranchDirectives() {
      // 1. Detach old listeners
      activeDirectiveListeners.forEach(item => {
        try { item.ref.off('value', item.callback); } catch (e) {}
      });
      activeDirectiveListeners = [];

      // Check local caches first
      checkAndRenderActiveDirectives();
      renderDirectivesHistoryList();

      if (!firebaseDb) return;

      // 2. Determine which branches to monitor
      const branches = getBranchesList();
      const branchesToWatch = (currentUserRole === 'admin')
        ? branches.map(b => b.id)
        : (currentBranchId && currentBranchId !== 'all' ? [currentBranchId] : branches.map(b => b.id));

      // 3. Attach realtime listeners for each branch
      branchesToWatch.forEach(bId => {
        const ref = firebaseDb.ref('branches/' + bId + '/directives');
        const cb = (snapshot) => {
          const val = snapshot.val();
          let list = [];
          if (val) {
            list = Object.values(val);
            list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          }
          memoryDirectivesCache[bId] = list;

          const key = 'diwan_directives_' + bId + '_' + currentDate;
          safeSetItem(key, JSON.stringify(list.slice(0, 40)));

          // Immediately alert any unacknowledged directive targeted to this user
          if (bId === currentBranchId || (currentUserRole === 'admin' && currentBranchId === 'all')) {
            list.forEach(d => {
              if (!d.acknowledged) {
                if (d.senderId === (typeof currentUserId !== 'undefined' ? currentUserId : '')) {
                  return; // Don't alarm the sender themselves
                }
                if (d.targetUserId === 'all_managers') {
                  if (currentUserRole === 'branch_manager') triggerDirectiveAlert(d);
                } else if (d.targetUserId === 'all_supervisors') {
                  if (currentUserRole === 'supervisor') triggerDirectiveAlert(d);
                } else if (!d.targetUserId || d.targetUserId === 'all' || (typeof currentUserId !== 'undefined' && currentUserId === d.targetUserId)) {
                  triggerDirectiveAlert(d);
                }
              }
            });
          }

          // Realtime live updates without requiring manual reload or refresh!
          checkAndRenderActiveDirectives();
          renderDirectivesHistoryList();
        };

        ref.on('value', cb, (err) => {
          console.warn('Branch directives listen error for ' + bId, err);
        });

        activeDirectiveListeners.push({ ref: ref, callback: cb, branchId: bId });
      });
    }

    // Display Active Directive Banner
    function checkAndRenderActiveDirectives() {
      const bannerContainer = document.getElementById('directiveAlertBanner');
      if (!bannerContainer) return;

      const key = 'diwan_directives_' + currentBranchId + '_' + currentDate;
      let directives = memoryDirectivesCache[currentBranchId] || safeJsonParse(safeGetItem(key), []);

      // If admin and viewing 'all', search across all branches for active directives
      if (currentUserRole === 'admin' && currentBranchId === 'all') {
        directives = [];
        const branches = getBranchesList();
        branches.forEach(b => {
          const bList = memoryDirectivesCache[b.id] || safeJsonParse(safeGetItem('diwan_directives_' + b.id + '_' + currentDate), []);
          directives.push(...bList);
        });
      }

      // Filter active unacknowledged directives targeting this branch / supervisor
      const active = directives.find(d => {
        if (d.acknowledged) return false;
        if (d.senderId === (typeof currentUserId !== 'undefined' ? currentUserId : '')) {
          return false;
        }
        if (d.targetUserId && d.targetUserId !== 'all') {
          if (d.targetUserId === 'all_managers') {
            return (currentUserRole === 'branch_manager');
          } else if (d.targetUserId === 'all_supervisors') {
            return (currentUserRole === 'supervisor');
          } else {
            return (typeof currentUserId !== 'undefined' && currentUserId === d.targetUserId);
          }
        }
        return true;
      });

      if (!active) {
        bannerContainer.style.display = 'none';
        bannerContainer.innerHTML = '';
        return;
      }

      // Trigger instant audio & phone notification for newly arrived directive
      triggerDirectiveAlert(active);

      const pClass = active.priority || 'urgent';
      const pLabel = (pClass === 'urgent')
        ? '🚨 توجيه إداري عاجل جداً'
        : (pClass === 'important' ? '⚠️ توجيه إداري هام' : '📢 ملاحظة إدارية');
      const senderTitle = (active.senderRole === 'admin') ? 'المدير العام' : 'مدير الفرع';

      bannerContainer.style.display = 'block';
      bannerContainer.innerHTML = `
        <div class="directive-banner-card ${pClass}">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="directive-pulse-badge">${pLabel}</span>
              <span style="font-weight: 800; font-size: 13.5px;">من: ${escapeHtml(active.senderName)} (${senderTitle})</span>
              <span style="font-size: 11px; opacity: 0.85;">🕒 ${escapeHtml(active.timeFormatted || '')}</span>
            </div>
            <button type="button" class="btn-ack-directive" onclick="acknowledgeDirective('${escapeHtml(active.id)}', '${escapeHtml(active.branchId || currentBranchId)}')">
              ✔️ تم الاطلاع والتنفيذ
            </button>
          </div>
          ${active.text ? `<div class="directive-text-content">${escapeHtml(active.text)}</div>` : ''}
          ${active.audioBase64 ? `
            <div class="directive-audio-player-wrap">
              <span style="font-size: 12px; font-weight: 700;">🎙️ استماع للملاحظة الصوتية (${active.audioDuration || 0} ثانية):</span>
              <audio controls src="${active.audioBase64}" style="height: 32px; flex: 1; max-width: 320px;"></audio>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Acknowledge Directive (Read Receipt)
    function acknowledgeDirective(dirId, branchId) {
      const nowStr = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
      // Resolve acknowledging branch: user's branch takes precedence, then branchId, then search
      let bId = (currentBranchId && currentBranchId !== 'all') ? currentBranchId : (branchId && branchId !== 'all' ? branchId : null);

      if (!bId) {
        const branches = getBranchesList();
        for (const b of branches) {
          const list = memoryDirectivesCache[b.id] || safeJsonParse(safeGetItem('diwan_directives_' + b.id + '_' + currentDate), []);
          if (list.some(d => d.id === dirId)) {
            bId = b.id;
            break;
          }
        }
      }

      if (!bId) bId = currentBranchId;

      // 1. Update in memory cache
      if (memoryDirectivesCache[bId]) {
        const item = memoryDirectivesCache[bId].find(d => d.id === dirId);
        if (item) {
          item.acknowledged = true;
          item.acknowledgedBy = currentSupervisor;
          item.acknowledgedAt = 'اليوم ' + nowStr;
        }
      }

      // 2. Update in localStorage
      const key = 'diwan_directives_' + bId + '_' + currentDate;
      const list = safeJsonParse(safeGetItem(key), []);
      const idx = list.findIndex(d => d.id === dirId);
      if (idx !== -1) {
        list[idx].acknowledged = true;
        list[idx].acknowledgedBy = currentSupervisor;
        list[idx].acknowledgedAt = 'اليوم ' + nowStr;
        safeSetItem(key, JSON.stringify(list));
      }

      // 3. Sync acknowledgment to Firebase in realtime
      if (firebaseDb && bId && bId !== 'all') {
        firebaseDb.ref('branches/' + bId + '/directives/' + dirId).update({
          acknowledged: true,
          acknowledgedBy: currentSupervisor,
          acknowledgedAt: 'اليوم ' + nowStr
        }).then(() => {
          console.log('✅ Acknowledgment synced to Firebase for branch:', bId);
        }).catch(e => console.warn('Acknowledge sync failed:', e));
      }

      showToast("✅ تم تأكيد استلام التوجيه وإخطار الإدارة بنجاح!");
      checkAndRenderActiveDirectives();
      renderDirectivesHistoryList();
    }

    // Directives History Log in Modal (Realtime Live Sync)
    function renderDirectivesHistoryList() {
      const container = document.getElementById('directivesLogContainer');
      if (!container) return;

      const filterContainer = document.getElementById('directiveLogBranchFilterContainer');
      const branches = getBranchesList();

      if (filterContainer) {
        if (currentUserRole === 'admin') {
          let sel = document.getElementById('directiveLogBranchFilterSelect');
          if (!sel) {
            filterContainer.innerHTML = `
              <select id="directiveLogBranchFilterSelect" class="form-control" style="font-size: 11.5px; padding: 3px 8px; width: auto; font-weight: 700;" onchange="renderDirectivesHistoryList()">
                <option value="all">🌐 كافة الفروع</option>
                ${branches.map(b => `<option value="${b.id}">${escapeHtml(b.nameAr)}</option>`).join('')}
              </select>
            `;
          }
        } else {
          filterContainer.innerHTML = '';
        }
      }

      const filterSelect = document.getElementById('directiveLogBranchFilterSelect');
      const selectedFilter = filterSelect ? filterSelect.value : (currentBranchId || 'all');

      let combinedList = [];

      if (currentUserRole === 'admin' && selectedFilter === 'all') {
        branches.forEach(b => {
          const list = memoryDirectivesCache[b.id] || safeJsonParse(safeGetItem('diwan_directives_' + b.id + '_' + currentDate), []);
          list.forEach(d => {
            if (!d.branchNameAr) d.branchNameAr = b.nameAr;
            combinedList.push(d);
          });
        });

        // Deduplicate central broadcast directives by id
        const mapById = new Map();
        combinedList.forEach(item => {
          if (!mapById.has(item.id)) {
            mapById.set(item.id, item);
          } else {
            const existing = mapById.get(item.id);
            if (!existing.acknowledged && item.acknowledged) {
              mapById.set(item.id, item);
            }
          }
        });
        combinedList = Array.from(mapById.values());
      } else {
        const targetBId = (selectedFilter && selectedFilter !== 'all') ? selectedFilter : currentBranchId;
        const bObj = getBranchById(targetBId);
        const list = memoryDirectivesCache[targetBId] || safeJsonParse(safeGetItem('diwan_directives_' + targetBId + '_' + currentDate), []);
        list.forEach(d => {
          if (!d.branchNameAr && bObj) d.branchNameAr = bObj.nameAr;
          combinedList.push(d);
        });
      }

      combinedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      if (combinedList.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13px;">
            لا توجد توجيهات مسجلة اليوم حتى الآن 📭
          </div>
        `;
        return;
      }

      container.innerHTML = combinedList.map(d => {
        const isAck = d.acknowledged;
        const pLabel = (d.priority === 'urgent')
          ? '🔴 عاجل'
          : (d.priority === 'important' ? '🟡 هام' : '🟢 عادي');
        const bName = d.branchNameAr || (getBranchById(d.branchId) ? getBranchById(d.branchId).nameAr : '');

        return `
          <div style="background: white; border: 1px solid var(--border); border-radius: 8px; padding: 12px; box-shadow: var(--shadow-sm); transition: all 0.2s ease;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <span style="font-size: 11px; font-weight: 800; padding: 2px 6px; border-radius: 4px; background: #f1f5f9;">${pLabel}</span>
                ${bName ? `<span style="background: #e0f2fe; color: #0369a1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px;">🏢 ${escapeHtml(bName)}</span>` : ''}
                <strong style="font-size: 13px; color: var(--secondary);">من: ${escapeHtml(d.senderName)}</strong>
                ${(() => {
                  if (d.targetUserId === 'all_managers') {
                    return '<span style="background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; font-size: 11px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">👔 مديري الفروع</span>';
                  } else if (d.targetUserId === 'all_supervisors') {
                    return '<span style="background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; font-size: 11px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">👤 مسؤولي الصالة</span>';
                  } else if (d.targetUserId && d.targetUserId !== 'all') {
                    const tSup = getSupervisorsList().find(s => s.id === d.targetUserId);
                    if (tSup) {
                      const isMgr = tSup.role === 'branch_manager' || (tSup.id && tSup.id.startsWith('mgr_'));
                      return `<span style="background: #fdf2f8; color: #9d174d; border: 1px solid #fbcfe8; font-size: 11px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">${isMgr ? '🏢 المدير:' : '👤 إلى:'} ${escapeHtml(tSup.name)}</span>`;
                    }
                  }
                  return '';
                })()}
                <span style="font-size: 11px; color: var(--text-muted);">🕒 ${escapeHtml(d.timeFormatted || '')}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                ${isAck ? `
                  <span style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px; display: inline-flex; align-items: center; gap: 4px;">
                    ✅ تم الاطلاع والتنفيذ: ${escapeHtml(d.acknowledgedBy || 'المشرف')} (${escapeHtml(d.acknowledgedAt || '')})
                  </span>
                ` : `
                  <span style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px; display: inline-flex; align-items: center; gap: 4px;">
                    ⏳ قيد الانتظار (لم يؤكد بعد)
                  </span>
                `}
                ${(currentUserRole === 'admin' || currentUserRole === 'branch_manager') ? `
                  <button type="button" class="btn btn-sm" onclick="cancelSingleDirective('${escapeHtml(d.id)}', '${escapeHtml(d.branchId || '')}')" style="background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; font-size: 10.5px; font-weight: 800; padding: 2px 7px; border-radius: 6px; cursor: pointer;" title="إلغاء وحذف هذا التوجيه">
                    🗑️ إلغاء
                  </button>
                ` : ''}
              </div>
            </div>
            ${d.text ? `<div style="font-size: 13px; color: var(--text); background: #f8fafc; padding: 8px 10px; border-radius: 6px; margin: 6px 0; border: 1px solid #f1f5f9;">${escapeHtml(d.text)}</div>` : ''}
            ${d.audioBase64 ? `
              <div style="margin-top: 6px; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 700;">🎙️ تسجيل صوتي (${d.audioDuration || 0}ث):</span>
                <audio controls src="${d.audioBase64}" style="height: 30px; width: 100%; max-width: 280px;"></audio>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }

    // Cancel / Delete a Single Directive
    function cancelSingleDirective(dirId, branchId) {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') return;
      if (!confirm("هل أنت متأكد من إلغاء وحذف هذا التوجيه؟")) return;

      const branches = getBranchesList();
      const targetBranches = (branchId && branchId !== 'all')
        ? [branchId]
        : branches.map(b => b.id);

      targetBranches.forEach(bId => {
        if (memoryDirectivesCache[bId]) {
          memoryDirectivesCache[bId] = memoryDirectivesCache[bId].filter(d => d.id !== dirId);
        }

        const key = 'diwan_directives_' + bId + '_' + currentDate;
        const list = safeJsonParse(safeGetItem(key), []);
        const filtered = list.filter(d => d.id !== dirId);
        safeSetItem(key, JSON.stringify(filtered));

        if (firebaseDb) {
          firebaseDb.ref('branches/' + bId + '/directives/' + dirId).remove()
            .catch(e => console.warn('Firebase directive remove error:', e));
        }
      });

      showToast("🗑️ تم إلغاء وحذف التوجيه بنجاح!");
      checkAndRenderActiveDirectives();
      renderDirectivesHistoryList();
    }

    // Clear / Cancel Old Completed Directives
    function clearOldDirectives() {
      if (currentUserRole !== 'admin' && currentUserRole !== 'branch_manager') return;
      if (!confirm("هل تريد مسح كافة التوجيهات القديمة المكتملة (التي تم تأكيد تنفيذها)؟")) return;

      const branches = getBranchesList();
      let clearedCount = 0;

      branches.forEach(b => {
        const bId = b.id;
        const key = 'diwan_directives_' + bId + '_' + currentDate;
        const list = memoryDirectivesCache[bId] || safeJsonParse(safeGetItem(key), []);

        const toKeep = [];
        const toRemove = [];

        list.forEach(d => {
          if (d.acknowledged) {
            toRemove.push(d);
          } else {
            toKeep.push(d);
          }
        });

        if (toRemove.length > 0) {
          clearedCount += toRemove.length;
          memoryDirectivesCache[bId] = toKeep;
          safeSetItem(key, JSON.stringify(toKeep));

          if (firebaseDb) {
            toRemove.forEach(d => {
              firebaseDb.ref('branches/' + bId + '/directives/' + d.id).remove().catch(e => {});
            });
          }
        }
      });

      if (clearedCount > 0) {
        showToast(`🧹 تم مسح ${clearedCount} توجيه قديم بنجاح!`);
      } else {
        showToast("لا توجد توجيهات قديمة مكتملة لمسحها.");
      }

      checkAndRenderActiveDirectives();
      renderDirectivesHistoryList();
    }

    /* ============================================================
       FIREBASE CLOUD MESSAGING (FCM) & WEB PUSH INTEGRATION
       ============================================================ */
    let fcmMessaging = null;
    let activeFcmToken = null;

    const DEFAULT_FCM_VAPID_KEY = "BOD0MQjfHfGqbhj_X8ysumjNmA7--HdGL24u3mk_gTHsw9l54RP98cB0kvv2EGQpQdMM0MGW1hnqwIYthrgiyGU";

    function getFcmConfig() {
      const local = safeJsonParse(safeGetItem('diwan_fcm_config'), null);
      if (local && (local.vapidKey || local.serverKey)) {
        if (!local.vapidKey) local.vapidKey = DEFAULT_FCM_VAPID_KEY;
        return local;
      }
      return {
        vapidKey: DEFAULT_FCM_VAPID_KEY,
        serverKey: ''
      };
    }

    function initFirebaseMessaging() {
      if (!('Notification' in window) || !('serviceWorker' in navigator) || !firebaseDb) return;
      if (typeof firebase.messaging !== 'function') return;

      try {
        if (!fcmMessaging) {
          fcmMessaging = firebase.messaging();

          // Handle foreground FCM push message
          fcmMessaging.onMessage((payload) => {
            console.log('⚡ FCM foreground message arrived:', payload);
            const title = (payload.notification && payload.notification.title) || (payload.data && payload.data.title) || '📢 توجيه إداري';
            const body = (payload.notification && payload.notification.body) || (payload.data && payload.data.body) || '';
            triggerDirectiveAlert({
              id: (payload.data && payload.data.directiveId) || ('dir_' + Date.now()),
              senderName: (payload.data && payload.data.senderName) || 'الإدارة',
              priority: (payload.data && payload.data.priority) || 'urgent',
              text: body
            });
          });
        }

        // Auto-sync default VAPID key to Firebase RTDB config/fcm if not set yet
        firebaseDb.ref('config/fcm/vapidKey').once('value').then(snap => {
          if (!snap.val()) {
            firebaseDb.ref('config/fcm').update({
              vapidKey: DEFAULT_FCM_VAPID_KEY,
              updatedAt: new Date().toISOString()
            });
          }
        }).catch(e => {});

        // Listen for cloud VAPID configuration from Firebase Realtime Database config/fcm
        firebaseDb.ref('config/fcm').on('value', (snap) => {
          const val = snap.val();
          if (val && val.vapidKey) {
            const cur = getFcmConfig();
            cur.vapidKey = val.vapidKey;
            if (val.serverKey) cur.serverKey = val.serverKey;
            safeSetItem('diwan_fcm_config', JSON.stringify(cur));
            registerFcmDeviceToken();
          }
        });

        // Register device token if permission is already granted
        if (Notification.permission === 'granted') {
          registerFcmDeviceToken();
        }
      } catch (err) {
        console.warn('FCM Messaging initialization warning:', err);
      }
    }

    async function registerFcmDeviceToken() {
      if (!fcmMessaging || !('serviceWorker' in navigator)) return;
      if (Notification.permission !== 'granted') return;

      const fcmConfig = getFcmConfig();
      const vapidKey = fcmConfig.vapidKey ? fcmConfig.vapidKey.trim() : '';

      try {
        const swReg = await navigator.serviceWorker.ready;
        const tokenOptions = { serviceWorkerRegistration: swReg };
        if (vapidKey) {
          tokenOptions.vapidKey = vapidKey;
        }

        const token = await fcmMessaging.getToken(tokenOptions);
        if (token) {
          activeFcmToken = token;
          console.log('✅ FCM Device Token active:', token.substring(0, 15) + '...');
          
          // Save token to Firebase under this branch and user
          if (firebaseDb && currentBranchId && currentUserId) {
            const tokenData = {
              token: token,
              userId: currentUserId,
              userName: currentSupervisor,
              role: currentUserRole,
              branchId: currentBranchId,
              updatedAt: new Date().toISOString()
            };
            firebaseDb.ref('branches/' + currentBranchId + '/fcm_tokens/' + currentUserId).set(tokenData);
            firebaseDb.ref('fcm_devices/' + currentUserId).set(tokenData);
            if (typeof syncDeviceActivation === 'function') {
              syncDeviceActivation();
            }
          }
        }
      } catch (err) {
        console.warn('FCM Token registration notice (VAPID key check):', err);
      }
    }

    /* ============================================================
       GOOGLE CLOUD MESSAGING (FCM HTTP v1) & SERVICE ACCOUNT ENGINE
       ============================================================ */
    const GOOGLE_SERVICE_ACCOUNT = {
      project_id: "diwan-supervisor",
      client_email: "firebase-adminsdk-fbsvc@diwan-supervisor.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAL8uJpUhnuwI6\nqN6NOEgyswuMuSvBd6EfAqUgkshAbrVXSUXTu2Um5wQ28ic3N8zKNbYnT/zBqyoP\nXMttWKc6G8vrql8KzIXb0tCs6VwL60WyuzJgibJrguFp1iOpcoi8Pw9Q6gWPv1FJ\nowkgfFH7kpRCLCNnE/V9DNjudrB2ajBLh9l9RYrBGV/HQaZYDD1HqXbR3lZILA8Z\nbbY8yHJNXj8X2AahSxpGK/GSHQ4lTtB/1kqosiSOO1RoBUA9nOIC6ZReCzrXVfJe\nlneWMU+nC5DjZ5BCum7GYr4wL2/UQNfp4BjVXVI6fuqKwsk5B7YNnrjdvYvZJhcc\nJsFxwmt7AgMBAAECggEAAuAULvyCj068c004eytm5R9JonLYxT25cuHSv6CCj3g4\njVRCz66jjkfxh7LqxEg476OLFJ59PRaG/BDa2El1wwhMbjuvzVUPAaFvTs70+has\nhcaIM+qLeVFNdwxlnzDf+9UDsSW3LJXjrPLb/ZjujxF711uasf2Z9CN/kV3EORlJ\n+JfWewqpjTrU7M4U2a6sdg7l8Ls13X7ah5Db/18isHDjncVAuzCS73BWQzAmlpY9\nDQUCimdPKKDhlys81q28sm+DmP8+FgcDZkVu1gwAgkBDN0z3y4/RAaHkyv2z7DJS\no6kLRTRjHgvEJ+6xVDBZGK7e+cfiVrLRJP37EN2R5QKBgQDlg5yDMWiDxWE28Dro\ncCvXjsDraeYLG/iyIT5CASRB0P0fCoyJ2ATgwFcQ3R8MY3QWLaD1qkniD3HYjgz/\nFOS0ZCCx1xjN1vKvO4L8gK00NxU26YSgrx57k7aYifnQE9ZjNHK06GUgoC4IzC/n\nOwNeo0RLYV7Ukqz3uN3CJFvpbQKBgQDWXXGmOMQzAVz/jUQwMePBCzBYVDfYG7Ha\n94/HuMzF8M4/FIJQ8BjkiMNVBEGOrztLrnz8YDmjgcd37AeoLnGV4ZGnx1kDUdKB\nmBa3ZsH4pWpI266xTG7Dbn0KIlwG6LC7eAXiwEgiWK6PlFEFAmjJgROhZ0IYYTHB\nUHQxV2q/hwKBgHaoFlCVSK1nbB0VEb99zozA1uhedXok2ext11wUbwQ/4b0cnQ/e\nyJbRmbG0QAsNl8SnjmGzykK/LWKB/iIaUSsZ4PVQeRhiGlGR+ORGOkWWfLdI/zJ7\nlszYzzwJiUeUGfBr+ymgRDgb1/Dgb5uiHNnemr5F9tr7gcUIpE1ssr/5AoGBAIMy\nIZJn/7xvwyksnmUYw5msbWRB9wOuv4WSKk9EDR/AJ5p3xOIgcDu+cD4iIrVfDd1d\n52TWx7AIh7ofnPgTpLTkny6eVR4w/7MNECojG+g/5PK+cQZWDxxRDPoc2VHpK/Ew\nnfmPURakTAHX9lYoiVV6SDdqaQtewQLdaJ+iLtUVAoGAaES8aAYkiMuhW+hFvYZV\njVWMirVASgb0co4KVKYk5d0rA+4vXzpzASVWAGBVuggk0odRkK8H7BLDldWrkd6A\nno6zEzf9XGF4D+xsiYjNf3jd3ZdTaWT/fJ16e5cZ910P1y+wAAuUrpZMt5+w61+l\nRQQ+sQZKcWDd5iUTf2d9q6k=\n-----END PRIVATE KEY-----\n"
    };

    let cachedGoogleAccessToken = null;
    let cachedGoogleAccessTokenExpiry = 0;

    function pemToArrayBuffer(pem) {
      const b64 = pem.replace(/-----BEGIN [A-Z ]+-----|-----END [A-Z ]+-----|\s+/g, '');
      const raw = atob(b64);
      const rawLength = raw.length;
      const array = new Uint8Array(new ArrayBuffer(rawLength));
      for (let i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array.buffer;
    }

    function base64UrlEncodeJson(obj) {
      const str = unescape(encodeURIComponent(JSON.stringify(obj)));
      return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    function base64UrlEncodeBytes(bytes) {
      let binary = '';
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    async function getGoogleOAuth2AccessToken() {
      const now = Math.floor(Date.now() / 1000);
      if (cachedGoogleAccessToken && cachedGoogleAccessTokenExpiry > now + 60) {
        return cachedGoogleAccessToken;
      }

      const cryptoSubtle = window.crypto && (window.crypto.subtle || window.crypto.webkitSubtle);
      if (!cryptoSubtle) {
        throw new Error("WebCrypto Subtle not available in browser");
      }

      const header = { alg: "RS256", typ: "JWT" };
      const claimSet = {
        iss: GOOGLE_SERVICE_ACCOUNT.client_email,
        sub: GOOGLE_SERVICE_ACCOUNT.client_email,
        aud: "https://oauth2.googleapis.com/token",
        iat: now,
        exp: now + 3600,
        scope: "https://www.googleapis.com/auth/firebase.messaging"
      };

      const stringToSign = base64UrlEncodeJson(header) + "." + base64UrlEncodeJson(claimSet);
      const keyBuffer = pemToArrayBuffer(GOOGLE_SERVICE_ACCOUNT.private_key);
      const cryptoKey = await cryptoSubtle.importKey(
        "pkcs8",
        keyBuffer,
        { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
        false,
        ["sign"]
      );

      const encoder = new TextEncoder();
      const signatureBuffer = await cryptoSubtle.sign(
        "RSASSA-PKCS1-v1_5",
        cryptoKey,
        encoder.encode(stringToSign)
      );

      const signedJwt = stringToSign + "." + base64UrlEncodeBytes(new Uint8Array(signatureBuffer));

      const res = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=" + encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer") +
              "&assertion=" + encodeURIComponent(signedJwt)
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error("OAuth token request failed: " + res.status + " - " + errText);
      }

      const tokenData = await res.json();
      cachedGoogleAccessToken = tokenData.access_token;
      cachedGoogleAccessTokenExpiry = now + (tokenData.expires_in || 3600);
      console.log("✅ Google OAuth2 Access Token acquired successfully for FCM v1");
      return cachedGoogleAccessToken;
    }

    async function dispatchFcmPush(directive, targetBranchIds) {
      if (!firebaseDb) return;

      try {
        const tokensSet = new Set();
        for (const bId of targetBranchIds) {
          const snap = await firebaseDb.ref('branches/' + bId + '/fcm_tokens').once('value');
          const val = snap.val();
          if (val) {
            Object.values(val).forEach(item => {
              if (item && item.token) {
                if (directive.targetUserId === 'all_managers') {
                  const userObj = getSupervisorsList().find(s => s.id === item.userId);
                  const isMgr = item.role === 'branch_manager' || (item.userId && item.userId.startsWith('mgr_')) || (userObj && userObj.role === 'branch_manager');
                  if (isMgr) {
                    tokensSet.add(item.token);
                  }
                } else if (directive.targetUserId === 'all_supervisors') {
                  const userObj = getSupervisorsList().find(s => s.id === item.userId);
                  const isSup = item.role === 'supervisor' || (userObj && userObj.role === 'supervisor');
                  if (isSup) {
                    tokensSet.add(item.token);
                  }
                } else if (directive.targetUserId && directive.targetUserId !== 'all') {
                  if (item.userId === directive.targetUserId) {
                    tokensSet.add(item.token);
                  }
                } else {
                  tokensSet.add(item.token);
                }
              }
            });
          }
        }

        const tokens = Array.from(tokensSet);
        if (tokens.length === 0) {
          console.log('No registered FCM device tokens found in target branch(es).');
          return;
        }

        console.log(`🚀 Dispatching FCM v1 push to ${tokens.length} registered device(s)...`);

        const pLabel = directive.priority === 'urgent' ? '🚨 [عاجل جداً]' : (directive.priority === 'important' ? '⚠️ [هام]' : '📢 [توجيه]');
        const notifTitle = `${pLabel} توجيه إداري من: ${directive.senderName || 'الإدارة'}`;
        const bodyText = directive.text ? directive.text.substring(0, 120) : 'ملاحظة صوتية إدارية جديدة 🎙️';

        // 1. Primary: Google FCM HTTP v1 API
        try {
          const accessToken = await getGoogleOAuth2AccessToken();
          const sendPromises = tokens.map(token => {
            const messagePayload = {
              message: {
                token: token,
                notification: {
                  title: notifTitle,
                  body: bodyText
                },
                data: {
                  directiveId: String(directive.id || ''),
                  title: String(notifTitle),
                  body: String(bodyText),
                  priority: String(directive.priority || 'urgent'),
                  senderName: String(directive.senderName || 'الإدارة'),
                  url: String(window.location.href)
                },
                webpush: {
                  headers: {
                    Urgency: "high"
                  },
                  notification: {
                    title: notifTitle,
                    body: bodyText,
                    icon: "apple-touch-icon.png",
                    badge: "apple-touch-icon.png",
                    requireInteraction: true,
                    vibrate: [300, 150, 300, 150, 300],
                    tag: "dir_" + (directive.id || Date.now())
                  },
                  fcm_options: {
                    link: window.location.href
                  }
                }
              }
            };

            return fetch("https://fcm.googleapis.com/v1/projects/diwan-supervisor/messages:send", {
              method: "POST",
              headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(messagePayload)
            }).then(r => r.json()).then(res => {
              console.log("FCM v1 message sent to device:", res);
            }).catch(err => {
              console.warn("FCM v1 message send error for token:", err);
            });
          });

          await Promise.all(sendPromises);
          console.log("✅ All FCM v1 push notifications dispatched successfully!");
        } catch (fcmV1Err) {
          console.warn("FCM v1 dispatch notice:", fcmV1Err);
        }
      } catch (e) {
        console.warn('FCM dispatch error:', e);
      }
    }

    async function testCloudPushDispatch() {
      if (currentUserRole !== 'admin') return;
      try {
        const testDirective = {
          id: 'test_' + Date.now(),
          senderName: currentSupervisor + ' (تجربة سحابية)',
          priority: 'urgent',
          text: '🔔 إشعار سحابي تجريبي من الإدارة العامة - تأكيد رنين الهاتف والتطبيق مغلق'
        };
        const allBranchIds = getBranchesList().map(b => b.id);
        await dispatchFcmPush(testDirective, allBranchIds);
        alert("🚀 تم إرسال الإشعار السحابي التجريبي عبر Google FCM v1 إلى كافة الهواتف المسجلة بنجاح!");
      } catch (err) {
        alert("تنبيه: " + err.message);
      }
    }

    function openCloudMessagingModal() {
      if (currentUserRole !== 'admin') {
        alert("إعدادات الإشعارات السحابية مخصصة للمدير العام فقط.");
        return;
      }
      const cfg = getFcmConfig();
      const vapidInp = document.getElementById('fcmVapidKeyInput');
      const serverInp = document.getElementById('fcmServerKeyInput');
      if (vapidInp) vapidInp.value = cfg.vapidKey || '';
      if (serverInp) serverInp.value = cfg.serverKey || '';

      const statusBox = document.getElementById('fcmCurrentDeviceTokenStatus');
      if (statusBox) {
        if (activeFcmToken) {
          statusBox.innerHTML = `<span style="color: #059669; font-weight: 700;">✅ الجهاز مسجل سحابياً بنجاح:</span> <code style="font-size: 11px; word-break: break-all;">${activeFcmToken.substring(0, 25)}...</code>`;
        } else if (cfg.vapidKey) {
          statusBox.innerHTML = `<span style="color: #d97706; font-weight: 700;">⏳ تم حفظ المفتاح العام، بانتظار استلام التوكن من خوادم Google...</span>`;
        } else {
          statusBox.innerHTML = `<span style="color: #64748b;">لم يتم إدخال مفتاح VAPID Key بعد. أدخل المفتاح من Firebase Console لتمكين وصول الإشعارات والتطبيق مغلق.</span>`;
        }
      }

      document.body.classList.add('modal-open');
      const modal = document.getElementById('cloudMessagingModal');
      if (modal) modal.classList.add('open');
    }

    function closeCloudMessagingModal() {
      const modal = document.getElementById('cloudMessagingModal');
      if (modal) modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    function saveCloudMessagingConfig() {
      if (currentUserRole !== 'admin') return;
      const vapidInp = document.getElementById('fcmVapidKeyInput');
      const serverInp = document.getElementById('fcmServerKeyInput');

      const vapidKey = vapidInp ? vapidInp.value.trim() : '';
      const serverKey = serverInp ? serverInp.value.trim() : '';

      const cfg = {
        vapidKey: vapidKey,
        serverKey: serverKey,
        updatedAt: new Date().toISOString()
      };

      safeSetItem('diwan_fcm_config', JSON.stringify(cfg));

      if (firebaseDb) {
        firebaseDb.ref('config/fcm').set(cfg).then(() => {
          showToast("⚡ تم حفظ ومزامنة إعدادات الإشعارات السحابية بنجاح!");
        }).catch(err => {
          console.warn("Firebase config sync warning:", err);
          showToast("💾 تم حفظ الإعدادات محلياً.");
        });
      } else {
        showToast("💾 تم حفظ الإعدادات محلياً.");
      }

      registerFcmDeviceToken();
      closeCloudMessagingModal();
    }

    function testLocalSystemNotification() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification("🔔 تجربة إشعار ديوان ماركت", {
            body: "هكذا يظهر تنبيه التوجيهات الإدارية على شاشة القفل والهاتف!",
            icon: 'apple-touch-icon.png',
            badge: 'apple-touch-icon.png',
            vibrate: [300, 150, 300, 150, 300],
            tag: 'test_' + Date.now(),
            requireInteraction: true
          });
          showToast("📲 تم إرسال الإشعار التجريبي لشاشة هاتفك!");
        }).catch(e => {
          alert("تعذر إظهار الإشعار: " + e.message);
        });
      } else {
        alert("المتصفح لا يدعم Service Worker.");
      }
    }


    
        /* ============================================================
       INTELLIGENT MICROPHONE ACCESS & LISTEN-ONLY FALLBACK ENGINE
       ============================================================ */
    function createVirtualSilentAudioStream() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        if (!window._callAudioCtx || window._callAudioCtx.state === 'closed') {
          window._callAudioCtx = new AudioContextClass();
        }
        const ctx = window._callAudioCtx;
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        gain.gain.value = 0; // Pure mathematical silence
        osc.connect(gain);
        const dest = ctx.createMediaStreamDestination();
        gain.connect(dest);
        osc.start();
        return dest.stream;
      } catch (e) {
        console.warn('Failed to create virtual silent stream:', e);
        return null;
      }
    }

    async function acquireCallMicrophoneStream() {
      // 1. If mediaDevices is supported, attempt hardware microphone
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Try high-quality voice DSP constraints first
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              autoGainControl: true
            }
          });
          return stream;
        } catch (dspErr) {
          console.warn('⚠️ Studio DSP audio constraints failed, trying basic audio:true...', dspErr);
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            return stream;
          } catch (basicErr) {
            console.warn('⚠️ Hardware mic unavailable on this machine:', basicErr.name, basicErr.message);
            
            // If device is unplugged/not found or permission blocked on Desktop PC:
            // DO NOT CRASH! Fallback to Listen-Only Mode with virtual silent audio stream!
            const isNoDevice = (basicErr.name === 'NotFoundError' || basicErr.name === 'DevicesNotFoundError');
            const isPermissionBlocked = (basicErr.name === 'NotAllowedError' || basicErr.name === 'PermissionDeniedError');

            const silentStream = createVirtualSilentAudioStream();
            if (silentStream) {
              if (isNoDevice) {
                showToast('🎤 لا يوجد ميكروفون موصول بالكمبيوتر: تم بدء المكالمة في (وضع الاستماع) لسماع الطرف الآخر.');
              } else {
                showToast('⚠️ تم بدء المكالمة في وضع الاستماع (يمكنك سماع الطرف الآخر).');
              }
              return silentStream;
            }
            throw basicErr;
          }
        }
      }

      // Fallback if mediaDevices is missing (e.g. file:/// protocol or restricted context)
      const fallbackSilent = createVirtualSilentAudioStream();
      if (fallbackSilent) {
        showToast('⚠️ تم تفعيل وضع الاستماع الافتراضي للمكالمة.');
        return fallbackSilent;
      }

      throw new Error('MEDIA_DEVICES_NOT_SUPPORTED');
    }

        function handleMicrophoneAccessError(err, isCaller = true) {
      console.error('🎤 Detailed Mic access error:', err.name, err.message, err);
      if (typeof closeCallModal === 'function') closeCallModal();

      if (err.message === 'FILE_PROTOCOL_BLOCKED' || err.name === 'FileProtocolError') {
        alert("⚠️ تنبيه أمني من متصفح Chrome:\n\nأنت تفتح التطبيق كملف مباشر (file:///)... متصفحات Chrome تحظر الوصول إلى الميكروفون عند فتح الملفات مباشرة!\n\nالحل:\nيرجى تشغيل الموقع عبر خادم محلي (مثل Live Server أو http://localhost) أو فتح الرابط المرفوع على HTTPS.");
        return;
      }

      if (err.message === 'INSECURE_CONTEXT_HTTP' || err.name === 'InsecureContextError') {
        alert("⚠️ رابط الموقع غير آمن (HTTP):\n\nمتصفح Chrome يشترط تشغيل الميكروفون عبر رابط آمن مشفر (HTTPS) أو (localhost).\n\nيرجى استخدام رابط HTTPS للموقع.");
        return;
      }

      if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError' || err.message === 'NO_DEVICE_FOUND') {
        alert("🎤 لم يتم العثور على أي ميكروفون متصل بجهاز الكمبيوتر!\n\nيرجى التأكد من توصيل ميكروفون، سماعة رأس (Headset)، أو كاميرا ويب مزودة بمايك بالجهاز وإعادة المحاولة.");
        return;
      }

      if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        alert("⚠️ الميكروفون مشغول حالياً!\n\nهناك برنامج آخر في جهازك يستحوذ على الميكروفون حصرياً (مثل Zoom أو Microsoft Teams أو Skype أو برنامج تسجيل).\n\nيرجى إغلاق تلك البرامج وإعادة المحاولة.");
        return;
      }

      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError' || err.message === 'PERMISSION_DENIED_EXPLICIT') {
        alert("🚫 تم حظر الوصول للميكروفون في متصفح Chrome أو في نظام Windows:\n\n1. في Chrome: اضغط على أيقونة الإعدادات 🎛️ أو القفل 🔒 على يسار شريط الرابط (Address Bar) وتأكد من تحويل الميكروفون إلى 'سماح' (Allow).\n\n2. في نظام Windows:\nافتح الإعدادات (Settings) ⬅️ الخصوصية والأمان (Privacy & Security) ⬅️ الميكروفون (Microphone).\nتأكد من تفعيل: 'السماح للتطبيقات بالوصول للميكروفون' و 'السماح لتطبيقات سطح المكتب (Google Chrome)'.");
        return;
      }

      // Generic fallback
      alert(`⚠️ تعذر تشغيل الميكروفون (${err.name || 'خطأ'}: ${err.message || 'غير معروف'}).\nيرجى التأكد من توصيل الميكروفون وإعطاء الصلاحية في إعدادات المتصفح.`);
    }

/* ============================================================
       SCREEN WAKE LOCK ENGINE (منع انطفاء الشاشة أثناء العمل والمكالمات)
       ============================================================ */
    let appScreenWakeLock = null;
    let isWakeLockDesired = false;

    async function requestScreenWakeLock(reason = 'operation') {
      isWakeLockDesired = true;
      if (!('wakeLock' in navigator)) return;
      try {
        if (!appScreenWakeLock || appScreenWakeLock.released) {
          appScreenWakeLock = await navigator.wakeLock.request('screen');
          console.log(`💡 [WakeLock] Screen lock acquired successfully (${reason}).`);
          appScreenWakeLock.addEventListener('release', () => {
            console.log('💡 [WakeLock] Screen lock released.');
            appScreenWakeLock = null;
          });
        }
      } catch (err) {
        console.warn('💡 [WakeLock] Request notice:', err.message);
      }
    }

    function releaseScreenWakeLock() {
      isWakeLockDesired = false;
      if (appScreenWakeLock) {
        try {
          appScreenWakeLock.release();
        } catch (e) {}
        appScreenWakeLock = null;
      }
    }

    // Re-acquire wake lock on visibility change if app becomes visible again
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && isWakeLockDesired) {
        requestScreenWakeLock('visibility_resume');
      }
    });
