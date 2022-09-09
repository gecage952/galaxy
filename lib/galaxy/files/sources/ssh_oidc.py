try:
    from fs.sshfs import SSHFS
except ImportError:
    SSHFS = None

from ._pyfilesystem2 import PyFilesystem2FilesSource


class SshOidcFilesSource(PyFilesystem2FilesSource):
    plugin_type = "ssh_oidc"
    required_module = SSHFS
    required_package = "fs.sshfs"

    def _open_fs(self, user_context):
        props = self._serialization_props(user_context)
        path = props.pop("path")
        token = user_context.trans.user.custos_auth[0].access_token
        
        props['password'] = token

        handle = SSHFS(**props)
        if path:
            handle = handle.opendir(path)
        return handle


__all__ = ("SshOidcFilesSource",)
