
// scenes
export const OVERWORLD = 'overworld'

export const OVERWORLD_CELL_SIZE = 64;

// anims
export const PEASANT_WALK_RIGHT = 'peasant/walk_right'
export const PEASANT_WALK_LEFT = 'peasant/walk_left'
export const PEASANT_WALK_DOWN = 'peasant/walk_down'
export const PEASANT_WALK_UP = 'peasant/walk_up'
export const PEASANT_FACE_RIGHT = 'peasant/face_right'
export const PEASANT_FACE_LEFT =  'peasant/face_left'
export const PEASANT_FACE_DOWN =  'peasant/face_down'
export const PEASANT_FACE_UP =    'peasant/face_up'

export const PEASANT_IDLE = 'peasant/idle'

// terrain
export const GRASS = 0;
export const WATER = 1;
export const TREES = 3;
// export const MOUNTAIN = 2;

// pretty terrain
          // [self] [east] [south] [southeast]
export const WATER_GRASS_INTERFACE = [
      [17],  // 0000 -- all water
      [11], // 0001 -- grass at bottom-right corner
      [13], // 0010 -- grass at bottom-left corner
      [25], // 0011 -- grass on bottom side
      [27], // 0100 -- grass at top-right corner
      [18], // 0101 -- grass on right side
      [14], // 0110 -- grass w/ gap bottom-left to top-right
      [26],  // 0111 -- water at top-left corner
      [29], // 1000 -- grass at top-left
      [15], // 1001 -- grass w/ gap top-left to bottom-right
      [21], // 1010 -- grass on left side
      [24], // 1011 -- water at top-right corner
      [28], // 1100 -- grass on top side
      [10], // 1101 -- water at bottom-left corner
      [8], // 1110 -- water at bottom-right corner
      [0] // 1111 -- all grass
    ];

      // [self] [east] [south] [southeast]
export const TREE_GRASS_INTERFACE: number[][] = [
      [41],  // 0000 -- all tree
      [35], // 0001 -- grass at bottom-right corner
      [37], // 0010 -- grass at bottom-left corner
      [36], // 0011 -- grass on bottom side
      [51], // 0100 -- grass at top-right corner
      [43], // 0101 -- grass on right side
      [38], // 0110 -- grass w/ gap bottom-left to top-right
      [50],  // 0111 -- tree at top-left corner
      [53], // 1000 -- grass at top-left
      [39], // 1001 -- grass w/ gap top-left to bottom-right
      [45], // 1010 -- grass on left side
      [48], // 1011 -- tree at top-right corner
      [52], // 1100 -- grass on top side
      [34], // 1101 -- tree at bottom-left corner
      [32], // 1110 -- tree at bottom-right corner
      [0] // 1111 -- all grass
    ]
// export const WATER_WITH_GRASS_NORTH = 9;
// export const WATER_WITH_GRASS_SOUTH = 12;
// export const WATER_WITH_GRASS_EAST = 18;
// export const WATER_WITH_GRASS_WEST = 16;
// export const WATER_WITH_GRASS_SOUTHEAST = 11;
// export const WATER_WITH_GRASS_SOUTHWEST = 13;
// export const WATER_WITH_GRASS_NORTHEAST = 27;
// export const WATER_WITH_GRASS_NORTHWEST = 29;
// // WATER_WITH_GRASS_NORTHEAST

// export const GRASS_WITH_WATER_SOUTHEAST = 8;
// export const GRASS_WITH_WATER_SOUTHWEST = 10;
// export const GRASS_WITH_WATER_NORTHEAST = 24;
// export const GRASS_WITH_WATER_NORTHWEST = 26;

// export const GRASS_WITH_WATER_SURROUNDING = 30;
// export const GRASS_WITH_WATER_SURROUNDING_BRIDGE_SOUTH = 31;




// things
export const NOTHING = -1;
export const BANANA = 0;
export const STRAWBERRY = 1;
export const CORN = 2;
export const APPLES = 3;
export const GRAPES = 4;
export const PLUM = 5;
export const BLUEBERRY = 6;
export const EGGPLANT = 7;

// directions
export const NORTH = 'north'
export const SOUTH = 'south'
export const WEST = 'west'
export const EAST = 'east'
export const NORTHEAST = 'northeast'
export const NORTHWEST = 'northwest'
export const SOUTHEAST = 'southeast'
export const SOUTHWEST = 'southwest'
