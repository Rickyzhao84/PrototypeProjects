function splitString(text, chars) {
  const result = [];
  let current = null;
  for (const ch of text) {
    if (chars.indexOf(ch) !== -1) {
      if (current !== null) {
        result.push(current);
        current = null;
      }
      result.push(ch);
    } else {
      if (current === null) {
        current = ch;
      } else {
        current += ch;
      }
    }
  }

  if (current !== null) {
    result.push(current);
  }

  return result;
}

export function getBibleRef(text) {
  const bookNames = {
    创世记: 1,
    出埃及记: 2,
    利未记: 3,
    民数记: 4,
    申命记: 5,
    约书亚记: 6,
    士师记: 7,
    路得记: 8,
    撒母耳记上: 9,
    撒母耳记下: 10,
    列王纪上: 11,
    列王纪下: 12,
    历代志上: 13,
    历代志下: 14,
    以斯拉记: 15,
    尼希米记: 16,
    以斯帖记: 17,
    约伯记: 18,
    诗篇: 19,
    箴言: 20,
    传道书: 21,
    雅歌: 22,
    以赛亚书: 23,
    耶利米书: 24,
    耶利米哀歌: 25,
    以西结书: 26,
    但以理书: 27,
    何西阿书: 28,
    约珥书: 29,
    阿摩司书: 30,
    俄巴底亚书: 31,
    约拿书: 32,
    弥迦书: 33,
    那鸿书: 34,
    哈巴谷书: 35,
    西番雅书: 36,
    哈该书: 37,
    撒迦利亚书: 38,
    玛拉基书: 39,
    马太福音: 40,
    马可福音: 41,
    路加福音: 42,
    约翰福音: 43,
    使徒行传: 44,
    罗马书: 45,
    哥林多前书: 46,
    哥林多后书: 47,
    加拉太书: 48,
    以弗所书: 49,
    腓立比书: 50,
    歌罗西书: 51,
    帖撒罗尼迦前书: 52,
    帖撒罗尼迦后书: 53,
    提摩太前书: 54,
    提摩太后书: 55,
    提多书: 56,
    腓利门书: 57,
    希伯来书: 58,
    雅各书: 59,
    彼得前书: 60,
    彼得后书: 61,
    约翰一书: 62,
    约翰二书: 63,
    约翰三书: 64,
    犹大书: 65,
    启示录: 66,
    創世記: 1,
    出埃及記: 2,
    利未記: 3,
    民數記: 4,
    申命記: 5,
    約書亞記: 6,
    士師記: 7,
    路得記: 8,
    撒母耳記上: 9,
    撒母耳記下: 10,
    列王紀上: 11,
    列王紀下: 12,
    歷代志上: 13,
    歷代志下: 14,
    以斯拉記: 15,
    尼希米記: 16,
    以斯帖記: 17,
    約伯記: 18,
    詩篇: 19,
    傳道書: 21,
    以賽亞書: 23,
    耶利米書: 24,
    以西結書: 26,
    但以理書: 27,
    何西阿書: 28,
    約珥書: 29,
    阿摩司書: 30,
    俄巴底亞書: 31,
    約拿書: 32,
    彌迦書: 33,
    那鴻書: 34,
    哈巴谷書: 35,
    西番雅書: 36,
    哈該書: 37,
    撒迦利亞書: 38,
    瑪拉基書: 39,
    馬太福音: 40,
    馬可福音: 41,
    約翰福音: 43,
    使徒行傳: 44,
    羅馬書: 45,
    哥林多前書: 46,
    哥林多後書: 47,
    加拉太書: 48,
    以弗所書: 49,
    腓立比書: 50,
    歌羅西書: 51,
    帖撒羅尼迦前書: 52,
    帖撒羅尼迦後書: 53,
    提摩太前書: 54,
    提摩太後書: 55,
    提多書: 56,
    腓利門書: 57,
    希伯來書: 58,
    雅各書: 59,
    彼得前書: 60,
    彼得後書: 61,
    約翰一書: 62,
    約翰二書: 63,
    約翰三書: 64,
    猶大書: 65,
    啟示錄: 66,
    Genesis: 1,
    Exodus: 2,
    Leviticus: 3,
    Numbers: 4,
    Deuteronomy: 5,
    Joshua: 6,
    Judges: 7,
    Ruth: 8,
    '1 Samuel': 9,
    '2 Samuel': 10,
    '1 Kings': 11,
    '2 Kings': 12,
    '1 Chronicles': 13,
    '2 Chronicles': 14,
    Ezra: 15,
    Nehemiah: 16,
    Esther: 17,
    Job: 18,
    Psalm: 19,
    Proverbs: 20,
    Ecclesiastes: 21,
    'Song of Songs': 22,
    Isaiah: 23,
    Jeremiah: 24,
    Lamentations: 25,
    Ezekiel: 26,
    Daniel: 27,
    Hosea: 28,
    Joel: 29,
    Amos: 30,
    Obadiah: 31,
    Jonah: 32,
    Micah: 33,
    Nahum: 34,
    Habakkuk: 35,
    Zephaniah: 36,
    Haggai: 37,
    Zechariah: 38,
    Malachi: 39,
    Matthew: 40,
    Mark: 41,
    Luke: 42,
    John: 43,
    Acts: 44,
    Romans: 45,
    '1 Corinthians': 46,
    '2 Corinthians': 47,
    Galatians: 48,
    Ephesians: 49,
    Philippians: 50,
    Colossians: 51,
    '1 Thessalonians': 52,
    '2 Thessalonians': 53,
    '1 Timothy': 54,
    '2 Timothy': 55,
    Titus: 56,
    Philemon: 57,
    Hebrews: 58,
    James: 59,
    '1 Peter': 60,
    '2 Peter': 61,
    '1 John': 62,
    '2 John': 63,
    '3 John': 64,
    Jude: 65,
    Revelation: 66,
    创: 1,
    书: 6,
    诗: 19,
    传: 21,
    赛: 23,
    结: 26,
    弥: 33,
    鸿: 34,
    该: 37,
    亚: 38,
    玛: 39,
    约: 43,
    罗: 45,
    林后: 47,
    帖后: 53,
    提后: 55,
    门: 57,
    来: 58,
    彼后: 61,
    约一: 62,
    约二: 63,
    约三: 64,
    约壹: 62,
    约贰: 63,
    约叁: 64,
    犹: 65,
    启: 66,
    創: 1,
    出: 2,
    利: 3,
    民: 4,
    申: 5,
    書: 6,
    士: 7,
    得: 8,
    撒上: 9,
    撒下: 10,
    列上: 11,
    列下: 12,
    代上: 13,
    代下: 14,
    拉: 15,
    尼: 16,
    斯: 17,
    伯: 18,
    詩: 19,
    箴: 20,
    傳: 21,
    歌: 22,
    賽: 23,
    耶: 24,
    哀: 25,
    結: 26,
    但: 27,
    何: 28,
    珥: 29,
    摩: 30,
    俄: 31,
    拿: 32,
    彌: 33,
    鴻: 34,
    哈: 35,
    番: 36,
    該: 37,
    亞: 38,
    瑪: 39,
    太: 40,
    可: 41,
    路: 42,
    約: 43,
    徒: 44,
    羅: 45,
    林前: 46,
    林後: 47,
    加: 48,
    弗: 49,
    腓: 50,
    西: 51,
    帖前: 52,
    帖後: 53,
    提前: 54,
    提後: 55,
    多: 56,
    門: 57,
    來: 58,
    雅: 59,
    彼前: 60,
    彼後: 61,
    約一: 62,
    約二: 63,
    約三: 64,
    約壹: 62,
    約贰: 63,
    約叁: 64,
    猶: 65,
    啓: 66,
    啟: 66
  };
  const bibleReferences = [];
  for (const name in bookNames) {
    let startPos = 0;
    let pos = text.indexOf(name, startPos);
    while (pos !== -1) {
      startPos = pos + name.length;
      let endPos = startPos;
      while (endPos < text.length && ' \t\n0123456789:-'.indexOf(text[endPos]) !== -1) {
        endPos++;
      }

      const verseText = text.substr(startPos, endPos - startPos);
      const arr = splitString(verseText, [':', '-']);
      const chapter = parseInt(arr[0]);
      if (chapter > 0) {
        if (
          arr.length === 1 ||
          (arr.length === 3 && arr[1] === '-') ||
          (arr.length === 3 && arr[1] === ':') ||
          (arr.length === 5 && arr[1] === ':' && arr[3] === '-') ||
          (arr.length === 7 && arr[1] === ':' && arr[3] === '-' && arr[5] === ':')
        ) {
          bibleReferences.push({
            text: name + verseText,
            book: name,
            verse: verseText,
            start: pos,
            end: endPos
          });
        }
      }

      pos = text.indexOf(name, startPos);
    }
  }

  bibleReferences.sort(function (a, b) {
    return a.start <= b.start ? -1 : 1;
  });
  if (bibleReferences.length === 0) {
    return [{ type: 'text', value: text }];
  }

  const result = [];
  let start = 0;
  for (const item of bibleReferences) {
    if (item.start < start) continue; // skip this item. This item is "以赛亚书1:1" got parsed with one addition book of "书1:1"

    if (item.start !== start) {
      const value = text.substr(start, Math.max(0, item.start - start));
      if (value.length > 0) {
        result.push({ type: 'text', value });
      }
    }

    result.push({ type: 'bible', value: item.text, book: item.book, verse: item.verse });
    start = item.end;
  }

  if (start < text.length) {
    result.push({ type: 'text', value: text.substr(start) });
  }

  return result;
}
