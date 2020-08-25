
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

// floors
export const WOODEN_FLOOR = 0;
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
      [41],     // 0000 -- all tree
      [35],     // 0001 -- grass at bottom-right corner
      [37],     // 0010 -- grass at bottom-left corner
      [36],     // 0011 -- grass on bottom side
      [51],     // 0100 -- grass at top-right corner
      [43],     // 0101 -- grass on right side
      [38],     // 0110 -- grass w/ gap bottom-left to top-right
      [50],     // 0111 -- tree at top-left corner
      [53],     // 1000 -- grass at top-left
      [39],     // 1001 -- grass w/ gap top-left to bottom-right
      [45],     // 1010 -- grass on left side
      [48],     // 1011 -- tree at top-right corner
      [52],     // 1100 -- grass on top side
      [34],     // 1101 -- tree at bottom-left corner
      [32],     // 1110 -- tree at bottom-right corner
      ALL_GRASS // 1111 -- all grass
    ]


// things (fruit for now..)
export const NOTHING = -1;
export const BANANA = 0;
export const STRAWBERRY = 1;
export const CORN = 2;
export const APPLES = 3;
export const GRAPES = 4;
export const PLUM = 5;
export const BLUEBERRY = 6;
export const EGGPLANT = 7;

// items / constructed objects
export const WELL = 0;
export const FIRE = 1;

// structures
export const WOODEN_WALL = 1;
export const WOODEN_DOOR_CLOSED = 2;
export const WOODEN_DOOR_OPEN = 3;


export const WOODEN_WALL_CONNECTIONS = [
  // north east south west
  5,  // 0000 -- no connections 
  5,  // 0001 -- connected west
  10,  // 0010 -- connected south
  15, // 0011 -- connected south and west
  5,  // 0100 -- connected east
  5,  // 0101 -- connected east and west
  11, // 0110 -- connected east and south
  9,  // 0111 -- connected east-west and south
  14, // 1000 -- connected north
  3,  // 1001 -- connected north and west
  10, // 1010 -- connected north and south
  12, // 1011 -- connected north, south and west
  7,  // 1100 -- connected north and east
  6,  // 1101 -- connected east-west and north
  13, // 1110 -- connected north-south and east
  8,  // 1111 -- all connected
]

// const WOODEN_DOOR_CLOSED_NORTH_SOUTH = 20
export const WOODEN_DOOR_CLOSED_CONNECTIONS = [
  // north east south west
  16,  // 0000 -- no connections 
  16,  // 0001 -- connected west
  20,  // 0010 -- connected south
  -1, // 0011 -- connected south and west
  16,  // 0100 -- connected east
  16,  // 0101 -- connected east and west
  -1, // 0110 -- connected east and south
  -1,  // 0111 -- connected east-west and south
  20, // 1000 -- connected north
  -1,  // 1001 -- connected north and west
  20, // 1010 -- connected north and south
  -1, // 1011 -- connected north, south and west
  -1,  // 1100 -- connected north and east
  -1,  // 1101 -- connected east-west and north
  -1, // 1110 -- connected north-south and east
  -1,  // 1111 -- all connected
]

export const WOODEN_DOOR_OPEN_CONNECTIONS = [
  // north east south west
  17,  // 0000 -- no connections 
  17,  // 0001 -- connected west
  21,  // 0010 -- connected south
  -1, // 0011 -- connected south and west
  17,  // 0100 -- connected east
  17,  // 0101 -- connected east and west
  -1, // 0110 -- connected east and south
  -1,  // 0111 -- connected east-west and south
  21, // 1000 -- connected north
  -1,  // 1001 -- connected north and west
  21, // 1010 -- connected north and south
  -1, // 1011 -- connected north, south and west
  -1,  // 1100 -- connected north and east
  -1,  // 1101 -- connected east-west and north
  -1, // 1110 -- connected north-south and east
  -1,  // 1111 -- all connected
]



// duration of interaction progress (millis)
export const PROGRESS_INTERVAL = 500
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
