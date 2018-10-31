/**The Heavy Pill
 * You have 20 bottles of pills. 19 bottles ahve 1.0 gram pills but one has pills of weight
 * 1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottl?
 * You can only use the scale once.
 */

/**Solution:
 * Since we can only use the scale once, we can distinguish betweeen the bottles by adding 1 pill from 
 * Bottle #1, 2 pills from Bottle #2, 3 pills from Bottle #3 ... etc.
 * If all the pills were only 1 gram they would equal 20 * 21 / 2 = 210 grams
 * Therefore, (actual weight - 210 ) / 0.1 would result in the bottle number.
 */