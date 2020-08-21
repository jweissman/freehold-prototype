
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

const ALL_GRASS = [0,3,4,5,20,44]
const ALL_WATER = [1,2,17]
// pretty terrain
          // [self] [east] [south] [southeast]
export const WATER_GRASS_INTERFACE = [
      ALL_WATER,  // 0000 -- all water
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
      ALL_GRASS // 1111 -- all grass
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
      ALL_GRASS // 1111 -- all grass
    ]


// things (fruit)
export const NOTHING = -1;
export const BANANA = 0;
export const STRAWBERRY = 1;
export const CORN = 2;
export const APPLES = 3;
export const GRAPES = 4;
export const PLUM = 5;
export const BLUEBERRY = 6;
export const EGGPLANT = 7;

// items
export const WELL = 0;
export const FIRE = 1;

// duration of interaction progress (millis)
export const PROGRESS_INTERVAL = 1000
// # of cells in progress anim
export const PROGRESS_ANIM_LENGTH = 24

// directions
export const NORTH = 'north'
export const SOUTH = 'south'
export const WEST = 'west'
export const EAST = 'east'
export const NORTHEAST = 'northeast'
export const NORTHWEST = 'northwest'
export const SOUTHEAST = 'southeast'
export const SOUTHWEST = 'southwest'
