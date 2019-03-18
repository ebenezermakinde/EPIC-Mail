import userTable from './user';
import contactTable from './contacts';
import messageTable from './messages';
import sentTable from './sent';
import inboxTable from './inbox';
import groupTable from './groups';
import groupMember from './groupmembers';

(async () => {
  try {
    await userTable();
    await contactTable();
    await groupTable();
    await groupMember();
    await messageTable();
    await sentTable();
    await inboxTable();
  } catch (err) {
    console.log(err);
  }
})();
