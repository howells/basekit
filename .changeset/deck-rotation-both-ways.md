---
"@patternmode/deck": patch
---

Fix stacked cards all tilting the same way. The id hash behind `rotation` was
signed and then `Math.abs`'d, which capped it at half its range, so every card
leaned left. It is now an unsigned FNV-1a hash and the spread covers both
directions.
