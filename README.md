# DO NOT use pull requests to suggest crafts, just suggest them in [#suggestions](https://discord.com/channels/852889827229564958/855090284755812352)

## Syntax:
[`emojis.json`](emojis.json)
```json
{
    item: emoji
}
```
[`names.json`](names.json)
```json
{
    item: [singular, plural, article]
}
```
[`rarities.json`](rarities.json)
```json
{
    cell: rarity
    // Actual rarity is thisRarity - lastRarity
}
```
[`recipies.json`](rarities.json)
```json
{
    craft: {
        item: count
    }
}
```
[`trophies.json`](trophies.json)
```json
trophy[]
```