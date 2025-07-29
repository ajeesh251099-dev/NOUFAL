var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.012123811768447013,
        "pitch": -0.16140825282949578,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.1620038181373573,
          "pitch": 0.1908358896081701,
          "rotation": 12.566370614359176,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6232658331165215,
          "pitch": 0.10507257954141025,
          "rotation": 0,
          "target": "4-gf-bedroom"
        },
        {
          "yaw": -0.010749871509053932,
          "pitch": 0.17832545994145832,
          "rotation": 6.283185307179586,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.8679761124295737,
          "pitch": 0.17155385592237948,
          "rotation": 0,
          "target": "3-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.118242627834027,
          "pitch": 0.1512562849384942,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7767626681055209,
          "pitch": 0.31569245847178884,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gf-bedroom",
      "name": "GF BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8388300096103922,
          "pitch": 0.2911957900689366,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
