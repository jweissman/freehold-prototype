import { Cartogram } from "./Cartogram";
// import { GRASS, WATER, SOUTH, NORTH, WATER_WITH_GRASS_SOUTH, NORTHEAST, SOUTHEAST, EAST, WEST, WATER_WITH_GRASS_NORTH, WATER_WITH_GRASS_WEST, WATER_WITH_GRASS_EAST, NORTHWEST, SOUTHWEST, GRASS_WITH_WATER_SOUTHWEST, GRASS_WITH_WATER_SOUTHEAST, GRASS_WITH_WATER_NORTHEAST, GRASS_WITH_WATER_NORTHWEST, WATER_WITH_GRASS_NORTHEAST, WATER_WITH_GRASS_SOUTHEAST } from "../constants";
type TerrainOverlap = {
  a_with_b_north: number,
  a_with_b_south: number,
  a_with_b_east: number,
  a_with_b_west: number,
}
class TerrainMediator {
  // static generateIntermediateTerrain(
  //   source: Cartogram,
  //   target: Cartogram,
  //   a: number,
  //   b: number,
  //   overlap: TerrainOverlap) {
  //   let alpha = a;
  //   let beta = b;
  //   target = source.copy('prettyTerrain-' + source.name);
  //   target.eachPosition((x, y) => {
  //     if (source.at(x, y) == alpha) {
  //       let neighbors = source.labelledNeighbors(x, y);
  //       if (neighbors[NORTH] == alpha &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == alpha &&
  //         neighbors[SOUTH] == beta) {
  //         target.set(x, y, WATER_WITH_GRASS_NORTH);
  //       }

  //       if (neighbors[NORTH] == beta &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == alpha &&
  //         neighbors[SOUTH] == alpha) {
  //         this.prettyTerrain.set(x, y, WATER_WITH_GRASS_SOUTH);
  //       }

  //       if (neighbors[NORTH] == alpha &&
  //         neighbors[EAST] == beta &&
  //         neighbors[WEST] == alpha &&
  //         neighbors[SOUTH] == alpha) {
  //         this.prettyTerrain.set(x, y, WATER_WITH_GRASS_WEST);
  //       }

  //       if (neighbors[NORTH] == alpha &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == beta &&
  //         neighbors[SOUTH] == alpha) {
  //         this.prettyTerrain.set(x, y, WATER_WITH_GRASS_EAST);
  //       }

  //       if (neighbors[NORTH] == alpha &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == beta &&
  //         neighbors[SOUTH] == beta) {
  //         this.prettyTerrain.set(x, y, WATER_WITH_GRASS_NORTHEAST);
  //       }

  //       if (neighbors[NORTH] == beta &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == beta &&
  //         neighbors[SOUTH] == alpha) {
  //         this.prettyTerrain.set(x, y, WATER_WITH_GRASS_SOUTHEAST);
  //       }

  //       const grassAllFourDirections = (
  //         neighbors[NORTH] == alpha &&
  //         neighbors[EAST] == alpha &&
  //         neighbors[WEST] == alpha &&
  //         neighbors[SOUTH] == alpha
  //       );

  //       if (grassAllFourDirections) {
  //         if (neighbors[NORTHEAST] == alpha &&
  //           neighbors[NORTHWEST] == alpha &&
  //           neighbors[SOUTHEAST] == alpha &&
  //           neighbors[SOUTHWEST] == beta) {
  //           this.prettyTerrain.set(x, y, GRASS_WITH_WATER_SOUTHWEST);
  //         }

  //         if (neighbors[NORTHEAST] == alpha &&
  //           neighbors[NORTHWEST] == alpha &&
  //           neighbors[SOUTHEAST] == beta &&
  //           neighbors[SOUTHWEST] == alpha) {
  //           this.prettyTerrain.set(x, y, GRASS_WITH_WATER_SOUTHEAST);
  //         }

  //         if (neighbors[NORTHEAST] == alpha &&
  //           neighbors[NORTHWEST] == beta &&
  //           neighbors[SOUTHEAST] == alpha &&
  //           neighbors[SOUTHWEST] == alpha) {
  //           this.prettyTerrain.set(x, y, GRASS_WITH_WATER_NORTHWEST);
  //         }

  //         if (neighbors[NORTHEAST] == beta &&
  //           neighbors[NORTHWEST] == alpha &&
  //           neighbors[SOUTHEAST] == alpha &&
  //           neighbors[SOUTHWEST] == alpha) {
  //           this.prettyTerrain.set(x, y, GRASS_WITH_WATER_NORTHEAST);
  //         }
  //       }
  //     }
  //   });



  // }
}
